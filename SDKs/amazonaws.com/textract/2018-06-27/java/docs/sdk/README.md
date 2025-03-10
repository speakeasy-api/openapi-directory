# SDK

## Overview

Amazon Textract detects and analyzes text in documents and converts it into machine-readable text. This is the API reference documentation for Amazon Textract.

Amazon Web Services documentation
<https://docs.aws.amazon.com/textract/>
### Available Operations

* [analyzeDocument](#analyzedocument) - <p>Analyzes an input document for relationships between detected items. </p> <p>The types of information returned are as follows: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of <code>FeatureTypes</code>). </p> </li> <li> <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table.</p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>You can choose which type of analysis to perform by specifying the <code>FeatureTypes</code> list. </p> <p>The output is returned in a list of <code>Block</code> objects.</p> <p> <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentAnalysis</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
* [analyzeExpense](#analyzeexpense) - <p> <code>AnalyzeExpense</code> synchronously analyzes an input document for financially related relationships between text.</p> <p>Information is returned as <code>ExpenseDocuments</code> and seperated as follows:</p> <ul> <li> <p> <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which store information about the lines of text, such as an item purchased and its price on a receipt.</p> </li> <li> <p> <code>SummaryFields</code>- Contains all other information a receipt, such as header information or the vendors name.</p> </li> </ul>
* [analyzeID](#analyzeid) - Analyzes identity documents for relevant information. This information is extracted and returned as <code>IdentityDocumentFields</code>, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, <code>AnalyzeID</code> doesn't return any Geometry data.
* [detectDocumentText](#detectdocumenttext) - <p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be in one of the following image formats: JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
* [getDocumentAnalysis](#getdocumentanalysis) - <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of the <code>StartDocumentAnalysis</code> <code>FeatureTypes</code> input parameter). </p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Results. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <note> <p>While processing a document with queries, look out for <code>INVALID_REQUEST_PARAMETERS</code> output. This indicates that either the per page query limit has been exceeded or that the operation is trying to query a page in the document which doesn’t exist. </p> </note> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
* [getDocumentTextDetection](#getdocumenttextdetection) - <p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
* [getExpenseAnalysis](#getexpenseanalysis) - <p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts.</p> <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartExpenseAnalysis</code>.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetExpenseAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>
* [getLendingAnalysis](#getlendinganalysis) - <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>
* [getLendingAnalysisSummary](#getlendinganalysissummary) - <p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>
* [startDocumentAnalysis](#startdocumentanalysis) - <p>Starts the asynchronous analysis of an input document for relationships between detected items such as key-value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
* [startDocumentTextDetection](#startdocumenttextdetection) - <p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
* [startExpenseAnalysis](#startexpenseanalysis) - <p>Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names.</p> <p> <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the document in that bucket. </p> <p> <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was returned by your call to <code>StartExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>
* [startLendingAnalysis](#startlendinganalysis) - <p>Starts the classification and analysis of an input document. <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an Amazon S3 bucket.</p> <p> <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket name and the file name of the document. </p> <p> <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results of the analysis.</p> <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: </p> <ul> <li> <p>detailedResponse (contains the GetLendingAnalysis response)</p> </li> <li> <p>summaryResponse (for the GetLendingAnalysisSummary response)</p> </li> <li> <p>splitDocuments (documents split across logical boundaries)</p> </li> </ul>

## analyzeDocument

<p>Analyzes an input document for relationships between detected items. </p> <p>The types of information returned are as follows: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of <code>FeatureTypes</code>). </p> </li> <li> <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table.</p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>You can choose which type of analysis to perform by specifying the <code>FeatureTypes</code> list. </p> <p>The output is returned in a list of <code>Block</code> objects.</p> <p> <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentAnalysis</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyzeDocumentRequest;
import org.openapis.openapi.models.operations.AnalyzeDocumentResponse;
import org.openapis.openapi.models.operations.AnalyzeDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyzeDocumentRequest;
import org.openapis.openapi.models.shared.ContentClassifierEnum;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.FeatureTypeEnum;
import org.openapis.openapi.models.shared.HumanLoopConfig;
import org.openapis.openapi.models.shared.HumanLoopDataAttributes;
import org.openapis.openapi.models.shared.QueriesConfig;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeDocumentRequest req = new AnalyzeDocumentRequest(                new AnalyzeDocumentRequest(                new Document() {{
                                                bytes = "at";
                                                s3Object = new S3Object() {{
                                                    bucket = "at";
                                                    name = "Javier Schmidt";
                                                    version = "totam";
                                                }};;
                                            }};,                 new org.openapis.openapi.models.shared.FeatureTypeEnum[]{{
                                                add(FeatureTypeEnum.QUERIES),
                                                add(FeatureTypeEnum.TABLES),
                                                add(FeatureTypeEnum.QUERIES),
                                                add(FeatureTypeEnum.QUERIES),
                                            }}) {{
                                humanLoopConfig = new HumanLoopConfig("occaecati", "fugit") {{
                                    dataAttributes = new HumanLoopDataAttributes() {{
                                        contentClassifiers = new org.openapis.openapi.models.shared.ContentClassifierEnum[]{{
                                            add(ContentClassifierEnum.FREE_OF_ADULT_CONTENT),
                                            add(ContentClassifierEnum.FREE_OF_ADULT_CONTENT),
                                            add(ContentClassifierEnum.FREE_OF_ADULT_CONTENT),
                                        }};
                                    }};;
                                }};;
                                queriesConfig = new QueriesConfig(                new org.openapis.openapi.models.shared.Query[]{{
                                                    add(new Query("cum") {{
                                                        alias = "commodi";
                                                        pages = new String[]{{
                                                            add("modi"),
                                                            add("qui"),
                                                        }};
                                                        text = "impedit";
                                                    }}),
                                                }});;
                            }};, AnalyzeDocumentXAmzTargetEnum.TEXTRACT_ANALYZE_DOCUMENT) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            AnalyzeDocumentResponse res = sdk.sdk.analyzeDocument(req);

            if (res.analyzeDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyzeExpense

<p> <code>AnalyzeExpense</code> synchronously analyzes an input document for financially related relationships between text.</p> <p>Information is returned as <code>ExpenseDocuments</code> and seperated as follows:</p> <ul> <li> <p> <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which store information about the lines of text, such as an item purchased and its price on a receipt.</p> </li> <li> <p> <code>SummaryFields</code>- Contains all other information a receipt, such as header information or the vendors name.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyzeExpenseRequest;
import org.openapis.openapi.models.operations.AnalyzeExpenseResponse;
import org.openapis.openapi.models.operations.AnalyzeExpenseXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyzeExpenseRequest;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeExpenseRequest req = new AnalyzeExpenseRequest(                new AnalyzeExpenseRequest(                new Document() {{
                                                bytes = "iste";
                                                s3Object = new S3Object() {{
                                                    bucket = "dolor";
                                                    name = "Lester Welch";
                                                    version = "in";
                                                }};;
                                            }};);, AnalyzeExpenseXAmzTargetEnum.TEXTRACT_ANALYZE_EXPENSE) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
            }};            

            AnalyzeExpenseResponse res = sdk.sdk.analyzeExpense(req);

            if (res.analyzeExpenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyzeID

Analyzes identity documents for relevant information. This information is extracted and returned as <code>IdentityDocumentFields</code>, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, <code>AnalyzeID</code> doesn't return any Geometry data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyzeIDRequest;
import org.openapis.openapi.models.operations.AnalyzeIDResponse;
import org.openapis.openapi.models.operations.AnalyzeIDXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyzeIDRequest;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeIDRequest req = new AnalyzeIDRequest(                new AnalyzeIDRequest(                new org.openapis.openapi.models.shared.Document[]{{
                                                add(new Document() {{
                                                    bytes = "mollitia";
                                                    s3Object = new S3Object() {{
                                                        bucket = "laborum";
                                                        name = "Connie Herzog";
                                                        version = "enim";
                                                    }};
                                                }}),
                                                add(new Document() {{
                                                    bytes = "omnis";
                                                    s3Object = new S3Object() {{
                                                        bucket = "nemo";
                                                        name = "Velma Batz";
                                                        version = "doloribus";
                                                    }};
                                                }}),
                                                add(new Document() {{
                                                    bytes = "sapiente";
                                                    s3Object = new S3Object() {{
                                                        bucket = "architecto";
                                                        name = "Mike Nicolas";
                                                        version = "mollitia";
                                                    }};
                                                }}),
                                            }});, AnalyzeIDXAmzTargetEnum.TEXTRACT_ANALYZE_ID) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            AnalyzeIDResponse res = sdk.sdk.analyzeID(req);

            if (res.analyzeIDResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectDocumentText

<p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be in one of the following image formats: JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectDocumentTextRequest;
import org.openapis.openapi.models.operations.DetectDocumentTextResponse;
import org.openapis.openapi.models.operations.DetectDocumentTextXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectDocumentTextRequest;
import org.openapis.openapi.models.shared.Document;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectDocumentTextRequest req = new DetectDocumentTextRequest(                new DetectDocumentTextRequest(                new Document() {{
                                                bytes = "quis";
                                                s3Object = new S3Object() {{
                                                    bucket = "vitae";
                                                    name = "Matt Hamill";
                                                    version = "sequi";
                                                }};;
                                            }};);, DetectDocumentTextXAmzTargetEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            DetectDocumentTextResponse res = sdk.sdk.detectDocumentText(req);

            if (res.detectDocumentTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentAnalysis

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of the <code>StartDocumentAnalysis</code> <code>FeatureTypes</code> input parameter). </p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Results. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <note> <p>While processing a document with queries, look out for <code>INVALID_REQUEST_PARAMETERS</code> output. This indicates that either the per page query limit has been exceeded or that the operation is trying to query a page in the document which doesn’t exist. </p> </note> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentAnalysisRequest;
import org.openapis.openapi.models.operations.GetDocumentAnalysisResponse;
import org.openapis.openapi.models.operations.GetDocumentAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDocumentAnalysisRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDocumentAnalysisRequest req = new GetDocumentAnalysisRequest(                new GetDocumentAnalysisRequest("laborum") {{
                                maxResults = 96098L;
                                nextToken = "reiciendis";
                            }};, GetDocumentAnalysisXAmzTargetEnum.TEXTRACT_GET_DOCUMENT_ANALYSIS) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            GetDocumentAnalysisResponse res = sdk.sdk.getDocumentAnalysis(req);

            if (res.getDocumentAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentTextDetection

<p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentTextDetectionRequest;
import org.openapis.openapi.models.operations.GetDocumentTextDetectionResponse;
import org.openapis.openapi.models.operations.GetDocumentTextDetectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDocumentTextDetectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDocumentTextDetectionRequest req = new GetDocumentTextDetectionRequest(                new GetDocumentTextDetectionRequest("cum") {{
                                maxResults = 19987L;
                                nextToken = "doloremque";
                            }};, GetDocumentTextDetectionXAmzTargetEnum.TEXTRACT_GET_DOCUMENT_TEXT_DETECTION) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ut";
                xAmzCredential = "maiores";
                xAmzDate = "dicta";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "iusto";
            }};            

            GetDocumentTextDetectionResponse res = sdk.sdk.getDocumentTextDetection(req);

            if (res.getDocumentTextDetectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExpenseAnalysis

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts.</p> <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartExpenseAnalysis</code>.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetExpenseAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExpenseAnalysisRequest;
import org.openapis.openapi.models.operations.GetExpenseAnalysisResponse;
import org.openapis.openapi.models.operations.GetExpenseAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetExpenseAnalysisRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExpenseAnalysisRequest req = new GetExpenseAnalysisRequest(                new GetExpenseAnalysisRequest("harum") {{
                                maxResults = 317983L;
                                nextToken = "accusamus";
                            }};, GetExpenseAnalysisXAmzTargetEnum.TEXTRACT_GET_EXPENSE_ANALYSIS) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            GetExpenseAnalysisResponse res = sdk.sdk.getExpenseAnalysis(req);

            if (res.getExpenseAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLendingAnalysis

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLendingAnalysisRequest;
import org.openapis.openapi.models.operations.GetLendingAnalysisResponse;
import org.openapis.openapi.models.operations.GetLendingAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLendingAnalysisRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLendingAnalysisRequest req = new GetLendingAnalysisRequest(                new GetLendingAnalysisRequest("modi") {{
                                maxResults = 508969L;
                                nextToken = "rem";
                            }};, GetLendingAnalysisXAmzTargetEnum.TEXTRACT_GET_LENDING_ANALYSIS) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "repudiandae";
                xAmzDate = "sint";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "incidunt";
            }};            

            GetLendingAnalysisResponse res = sdk.sdk.getLendingAnalysis(req);

            if (res.getLendingAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLendingAnalysisSummary

<p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLendingAnalysisSummaryRequest;
import org.openapis.openapi.models.operations.GetLendingAnalysisSummaryResponse;
import org.openapis.openapi.models.operations.GetLendingAnalysisSummaryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetLendingAnalysisSummaryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLendingAnalysisSummaryRequest req = new GetLendingAnalysisSummaryRequest(                new GetLendingAnalysisSummaryRequest("consequatur");, GetLendingAnalysisSummaryXAmzTargetEnum.TEXTRACT_GET_LENDING_ANALYSIS_SUMMARY) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            GetLendingAnalysisSummaryResponse res = sdk.sdk.getLendingAnalysisSummary(req);

            if (res.getLendingAnalysisSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDocumentAnalysis

<p>Starts the asynchronous analysis of an input document for relationships between detected items such as key-value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDocumentAnalysisRequest;
import org.openapis.openapi.models.operations.StartDocumentAnalysisResponse;
import org.openapis.openapi.models.operations.StartDocumentAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentLocation;
import org.openapis.openapi.models.shared.FeatureTypeEnum;
import org.openapis.openapi.models.shared.NotificationChannel;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.QueriesConfig;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDocumentAnalysisRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDocumentAnalysisRequest req = new StartDocumentAnalysisRequest(                new StartDocumentAnalysisRequest(                new DocumentLocation() {{
                                                s3Object = new S3Object() {{
                                                    bucket = "qui";
                                                    name = "Mr. Shelly Lueilwitz";
                                                    version = "ipsam";
                                                }};;
                                            }};,                 new org.openapis.openapi.models.shared.FeatureTypeEnum[]{{
                                                add(FeatureTypeEnum.TABLES),
                                            }}) {{
                                clientRequestToken = "dolorum";
                                jobTag = "excepturi";
                                kmsKeyId = "tempora";
                                notificationChannel = new NotificationChannel("facilis", "tempore");;
                                outputConfig = new OutputConfig("labore") {{
                                    s3Prefix = "delectus";
                                }};;
                                queriesConfig = new QueriesConfig(                new org.openapis.openapi.models.shared.Query[]{{
                                                    add(new Query("officia") {{
                                                        alias = "non";
                                                        pages = new String[]{{
                                                            add("sint"),
                                                            add("aliquid"),
                                                            add("provident"),
                                                            add("necessitatibus"),
                                                        }};
                                                        text = "sint";
                                                    }}),
                                                    add(new Query("maiores") {{
                                                        alias = "dolor";
                                                        pages = new String[]{{
                                                            add("a"),
                                                            add("dolorum"),
                                                            add("in"),
                                                            add("in"),
                                                        }};
                                                        text = "illum";
                                                    }}),
                                                }});;
                            }};, StartDocumentAnalysisXAmzTargetEnum.TEXTRACT_START_DOCUMENT_ANALYSIS) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "magnam";
                xAmzDate = "cumque";
                xAmzSecurityToken = "facere";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aliquid";
            }};            

            StartDocumentAnalysisResponse res = sdk.sdk.startDocumentAnalysis(req);

            if (res.startDocumentAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDocumentTextDetection

<p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDocumentTextDetectionRequest;
import org.openapis.openapi.models.operations.StartDocumentTextDetectionResponse;
import org.openapis.openapi.models.operations.StartDocumentTextDetectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentLocation;
import org.openapis.openapi.models.shared.NotificationChannel;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDocumentTextDetectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDocumentTextDetectionRequest req = new StartDocumentTextDetectionRequest(                new StartDocumentTextDetectionRequest(                new DocumentLocation() {{
                                                s3Object = new S3Object() {{
                                                    bucket = "accusamus";
                                                    name = "Toni Haley";
                                                    version = "quidem";
                                                }};;
                                            }};) {{
                                clientRequestToken = "provident";
                                jobTag = "nam";
                                kmsKeyId = "id";
                                notificationChannel = new NotificationChannel("blanditiis", "deleniti");;
                                outputConfig = new OutputConfig("sapiente") {{
                                    s3Prefix = "amet";
                                }};;
                            }};, StartDocumentTextDetectionXAmzTargetEnum.TEXTRACT_START_DOCUMENT_TEXT_DETECTION) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            StartDocumentTextDetectionResponse res = sdk.sdk.startDocumentTextDetection(req);

            if (res.startDocumentTextDetectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startExpenseAnalysis

<p>Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names.</p> <p> <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the document in that bucket. </p> <p> <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was returned by your call to <code>StartExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartExpenseAnalysisRequest;
import org.openapis.openapi.models.operations.StartExpenseAnalysisResponse;
import org.openapis.openapi.models.operations.StartExpenseAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentLocation;
import org.openapis.openapi.models.shared.NotificationChannel;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartExpenseAnalysisRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartExpenseAnalysisRequest req = new StartExpenseAnalysisRequest(                new StartExpenseAnalysisRequest(                new DocumentLocation() {{
                                                s3Object = new S3Object() {{
                                                    bucket = "magnam";
                                                    name = "Alfonso Green";
                                                    version = "natus";
                                                }};;
                                            }};) {{
                                clientRequestToken = "nobis";
                                jobTag = "eum";
                                kmsKeyId = "vero";
                                notificationChannel = new NotificationChannel("aspernatur", "architecto");;
                                outputConfig = new OutputConfig("magnam") {{
                                    s3Prefix = "et";
                                }};;
                            }};, StartExpenseAnalysisXAmzTargetEnum.TEXTRACT_START_EXPENSE_ANALYSIS) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            StartExpenseAnalysisResponse res = sdk.sdk.startExpenseAnalysis(req);

            if (res.startExpenseAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startLendingAnalysis

<p>Starts the classification and analysis of an input document. <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an Amazon S3 bucket.</p> <p> <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket name and the file name of the document. </p> <p> <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results of the analysis.</p> <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: </p> <ul> <li> <p>detailedResponse (contains the GetLendingAnalysis response)</p> </li> <li> <p>summaryResponse (for the GetLendingAnalysisSummary response)</p> </li> <li> <p>splitDocuments (documents split across logical boundaries)</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartLendingAnalysisRequest;
import org.openapis.openapi.models.operations.StartLendingAnalysisResponse;
import org.openapis.openapi.models.operations.StartLendingAnalysisXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentLocation;
import org.openapis.openapi.models.shared.NotificationChannel;
import org.openapis.openapi.models.shared.OutputConfig;
import org.openapis.openapi.models.shared.S3Object;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartLendingAnalysisRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartLendingAnalysisRequest req = new StartLendingAnalysisRequest(                new StartLendingAnalysisRequest(                new DocumentLocation() {{
                                                s3Object = new S3Object() {{
                                                    bucket = "mollitia";
                                                    name = "Natalie Ernser";
                                                    version = "nemo";
                                                }};;
                                            }};) {{
                                clientRequestToken = "quasi";
                                jobTag = "iure";
                                kmsKeyId = "doloribus";
                                notificationChannel = new NotificationChannel("debitis", "eius");;
                                outputConfig = new OutputConfig("maxime") {{
                                    s3Prefix = "deleniti";
                                }};;
                            }};, StartLendingAnalysisXAmzTargetEnum.TEXTRACT_START_LENDING_ANALYSIS) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
            }};            

            StartLendingAnalysisResponse res = sdk.sdk.startLendingAnalysis(req);

            if (res.startLendingAnalysisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
