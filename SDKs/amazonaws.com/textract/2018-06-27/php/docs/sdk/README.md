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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Shared\FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopConfig;
use \OpenAPI\OpenAPI\Models\Shared\HumanLoopDataAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ContentClassifierEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueriesConfig;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyzeDocumentRequest();
    $request->analyzeDocumentRequest = new AnalyzeDocumentRequest();
    $request->analyzeDocumentRequest->document = new Document();
    $request->analyzeDocumentRequest->document->bytes = 'excepturi';
    $request->analyzeDocumentRequest->document->s3Object = new S3Object();
    $request->analyzeDocumentRequest->document->s3Object->bucket = 'nisi';
    $request->analyzeDocumentRequest->document->s3Object->name = 'Jake Bernier MD';
    $request->analyzeDocumentRequest->document->s3Object->version = 'perferendis';
    $request->analyzeDocumentRequest->featureTypes = [
        FeatureTypeEnum::SIGNATURES,
        FeatureTypeEnum::SIGNATURES,
    ];
    $request->analyzeDocumentRequest->humanLoopConfig = new HumanLoopConfig();
    $request->analyzeDocumentRequest->humanLoopConfig->dataAttributes = new HumanLoopDataAttributes();
    $request->analyzeDocumentRequest->humanLoopConfig->dataAttributes->contentClassifiers = [
        ContentClassifierEnum::FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION,
        ContentClassifierEnum::FREE_OF_ADULT_CONTENT,
        ContentClassifierEnum::FREE_OF_ADULT_CONTENT,
        ContentClassifierEnum::FREE_OF_ADULT_CONTENT,
    ];
    $request->analyzeDocumentRequest->humanLoopConfig->flowDefinitionArn = 'molestiae';
    $request->analyzeDocumentRequest->humanLoopConfig->humanLoopName = 'quod';
    $request->analyzeDocumentRequest->queriesConfig = new QueriesConfig();
    $request->analyzeDocumentRequest->queriesConfig->queries = [
        new Query(),
        new Query(),
        new Query(),
        new Query(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = AnalyzeDocumentXAmzTargetEnum::TEXTRACT_ANALYZE_DOCUMENT;

    $response = $sdk->sdk->analyzeDocument($request);

    if ($response->analyzeDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyzeExpense

<p> <code>AnalyzeExpense</code> synchronously analyzes an input document for financially related relationships between text.</p> <p>Information is returned as <code>ExpenseDocuments</code> and seperated as follows:</p> <ul> <li> <p> <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which store information about the lines of text, such as an item purchased and its price on a receipt.</p> </li> <li> <p> <code>SummaryFields</code>- Contains all other information a receipt, such as header information or the vendors name.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeExpenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeExpenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeExpenseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyzeExpenseRequest();
    $request->analyzeExpenseRequest = new AnalyzeExpenseRequest();
    $request->analyzeExpenseRequest->document = new Document();
    $request->analyzeExpenseRequest->document->bytes = 'occaecati';
    $request->analyzeExpenseRequest->document->s3Object = new S3Object();
    $request->analyzeExpenseRequest->document->s3Object->bucket = 'fugit';
    $request->analyzeExpenseRequest->document->s3Object->name = 'Irvin Rosenbaum III';
    $request->analyzeExpenseRequest->document->s3Object->version = 'molestiae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = AnalyzeExpenseXAmzTargetEnum::TEXTRACT_ANALYZE_EXPENSE;

    $response = $sdk->sdk->analyzeExpense($request);

    if ($response->analyzeExpenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## analyzeID

Analyzes identity documents for relevant information. This information is extracted and returned as <code>IdentityDocumentFields</code>, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, <code>AnalyzeID</code> doesn't return any Geometry data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeIDRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyzeIDRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeIDXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyzeIDRequest();
    $request->analyzeIDRequest = new AnalyzeIDRequest();
    $request->analyzeIDRequest->documentPages = [
        new Document(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = AnalyzeIDXAmzTargetEnum::TEXTRACT_ANALYZE_ID;

    $response = $sdk->sdk->analyzeID($request);

    if ($response->analyzeIDResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectDocumentText

<p>Detects text in the input document. Amazon Textract can detect lines of text and the words that make up a line of text. The input document must be in one of the following image formats: JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p> <code>DetectDocumentText</code> is a synchronous operation. To analyze documents asynchronously, use <a>StartDocumentTextDetection</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectDocumentTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectDocumentTextRequest;
use \OpenAPI\OpenAPI\Models\Shared\Document;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Operations\DetectDocumentTextXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectDocumentTextRequest();
    $request->detectDocumentTextRequest = new DetectDocumentTextRequest();
    $request->detectDocumentTextRequest->document = new Document();
    $request->detectDocumentTextRequest->document->bytes = 'laboriosam';
    $request->detectDocumentTextRequest->document->s3Object = new S3Object();
    $request->detectDocumentTextRequest->document->s3Object->bucket = 'hic';
    $request->detectDocumentTextRequest->document->s3Object->name = 'Wilbur Kirlin';
    $request->detectDocumentTextRequest->document->s3Object->version = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DetectDocumentTextXAmzTargetEnum::TEXTRACT_DETECT_DOCUMENT_TEXT;

    $response = $sdk->sdk->detectDocumentText($request);

    if ($response->detectDocumentTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentAnalysis

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p> <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p> <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following types of information are returned: </p> <ul> <li> <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY <code>Block</code> object and a VALUE <code>Block</code> object. For example, <i>Name: Ana Silva Carolina</i> contains a key and value. <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is the value.</p> </li> <li> <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL <code>Block</code> object is returned for each cell in a table.</p> </li> <li> <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of the <code>StartDocumentAnalysis</code> <code>FeatureTypes</code> input parameter). </p> </li> <li> <p>Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object.</p> </li> <li> <p>Query Results. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score.</p> </li> </ul> <note> <p>While processing a document with queries, look out for <code>INVALID_REQUEST_PARAMETERS</code> output. This indicates that either the per page query limit has been exceeded or that the operation is trying to query a page in the document which doesn’t exist. </p> </note> <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element, including the selection status.</p> <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDocumentAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentAnalysisRequest();
    $request->getDocumentAnalysisRequest = new GetDocumentAnalysisRequest();
    $request->getDocumentAnalysisRequest->jobId = 'laborum';
    $request->getDocumentAnalysisRequest->maxResults = 170909;
    $request->getDocumentAnalysisRequest->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = GetDocumentAnalysisXAmzTargetEnum::TEXTRACT_GET_DOCUMENT_ANALYSIS;

    $response = $sdk->sdk->getDocumentAnalysis($request);

    if ($response->getDocumentAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentTextDetection

<p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartDocumentTextDetection</code>. To get the results of the text-detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p> <code>GetDocumentTextDetection</code> returns an array of <a>Block</a> objects. </p> <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentTextDetectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDocumentTextDetectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentTextDetectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentTextDetectionRequest();
    $request->getDocumentTextDetectionRequest = new GetDocumentTextDetectionRequest();
    $request->getDocumentTextDetectionRequest->jobId = 'excepturi';
    $request->getDocumentTextDetectionRequest->maxResults = 38425;
    $request->getDocumentTextDetectionRequest->nextToken = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = GetDocumentTextDetectionXAmzTargetEnum::TEXTRACT_GET_DOCUMENT_TEXT_DETECTION;

    $response = $sdk->sdk->getDocumentTextDetection($request);

    if ($response->getDocumentTextDetectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExpenseAnalysis

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes invoices and receipts. Amazon Textract finds contact information, items purchased, and vendor name, from input invoices and receipts.</p> <p>You start asynchronous invoice/receipt analysis by calling <a>StartExpenseAnalysis</a>, which returns a job identifier (<code>JobId</code>). Upon completion of the invoice/receipt analysis, Amazon Textract publishes the completion status to the Amazon Simple Notification Service (Amazon SNS) topic. This topic must be registered in the initial call to <code>StartExpenseAnalysis</code>. To get the results of the invoice/receipt analysis operation, first ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <code>GetExpenseAnalysis</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartExpenseAnalysis</code>.</p> <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there are more results than specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call <code>GetExpenseAnalysis</code>, and populate the <code>NextToken</code> request parameter with the token value that's returned from the previous call to <code>GetExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoices-receipts.html">Analyzing Invoices and Receipts</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExpenseAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetExpenseAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetExpenseAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExpenseAnalysisRequest();
    $request->getExpenseAnalysisRequest = new GetExpenseAnalysisRequest();
    $request->getExpenseAnalysisRequest->jobId = 'consequuntur';
    $request->getExpenseAnalysisRequest->maxResults = 995300;
    $request->getExpenseAnalysisRequest->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = GetExpenseAnalysisXAmzTargetEnum::TEXTRACT_GET_EXPENSE_ANALYSIS;

    $response = $sdk->sdk->getExpenseAnalysis($request);

    if ($response->getExpenseAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLendingAnalysis

<p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a lending document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLendingAnalysis, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLendingAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLendingAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLendingAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLendingAnalysisRequest();
    $request->getLendingAnalysisRequest = new GetLendingAnalysisRequest();
    $request->getLendingAnalysisRequest->jobId = 'quia';
    $request->getLendingAnalysisRequest->maxResults = 338007;
    $request->getLendingAnalysisRequest->nextToken = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = GetLendingAnalysisXAmzTargetEnum::TEXTRACT_GET_LENDING_ANALYSIS;

    $response = $sdk->sdk->getLendingAnalysis($request);

    if ($response->getLendingAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLendingAnalysisSummary

<p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes text in a lending document. The returned summary consists of information about documents grouped together by a common document type. Information like detected signatures, page numbers, and split documents is returned with respect to the type of grouped document. </p> <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p> <p>To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartLendingAnalysis</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLendingAnalysisSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLendingAnalysisSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLendingAnalysisSummaryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLendingAnalysisSummaryRequest();
    $request->getLendingAnalysisSummaryRequest = new GetLendingAnalysisSummaryRequest();
    $request->getLendingAnalysisSummaryRequest->jobId = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = GetLendingAnalysisSummaryXAmzTargetEnum::TEXTRACT_GET_LENDING_ANALYSIS_SUMMARY;

    $response = $sdk->sdk->getLendingAnalysisSummary($request);

    if ($response->getLendingAnalysisSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDocumentAnalysis

<p>Starts the asynchronous analysis of an input document for relationships between detected items such as key-value pairs, tables, and selection elements.</p> <p> <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartDocumentAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDocumentAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDocumentAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Shared\FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannel;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\QueriesConfig;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Operations\StartDocumentAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDocumentAnalysisRequest();
    $request->startDocumentAnalysisRequest = new StartDocumentAnalysisRequest();
    $request->startDocumentAnalysisRequest->clientRequestToken = 'quasi';
    $request->startDocumentAnalysisRequest->documentLocation = new DocumentLocation();
    $request->startDocumentAnalysisRequest->documentLocation->s3Object = new S3Object();
    $request->startDocumentAnalysisRequest->documentLocation->s3Object->bucket = 'reiciendis';
    $request->startDocumentAnalysisRequest->documentLocation->s3Object->name = 'Caleb Koss';
    $request->startDocumentAnalysisRequest->documentLocation->s3Object->version = 'ipsa';
    $request->startDocumentAnalysisRequest->featureTypes = [
        FeatureTypeEnum::FORMS,
        FeatureTypeEnum::QUERIES,
        FeatureTypeEnum::TABLES,
    ];
    $request->startDocumentAnalysisRequest->jobTag = 'doloremque';
    $request->startDocumentAnalysisRequest->kmsKeyId = 'reprehenderit';
    $request->startDocumentAnalysisRequest->notificationChannel = new NotificationChannel();
    $request->startDocumentAnalysisRequest->notificationChannel->roleArn = 'ut';
    $request->startDocumentAnalysisRequest->notificationChannel->snsTopicArn = 'maiores';
    $request->startDocumentAnalysisRequest->outputConfig = new OutputConfig();
    $request->startDocumentAnalysisRequest->outputConfig->s3Bucket = 'dicta';
    $request->startDocumentAnalysisRequest->outputConfig->s3Prefix = 'corporis';
    $request->startDocumentAnalysisRequest->queriesConfig = new QueriesConfig();
    $request->startDocumentAnalysisRequest->queriesConfig->queries = [
        new Query(),
        new Query(),
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = StartDocumentAnalysisXAmzTargetEnum::TEXTRACT_START_DOCUMENT_ANALYSIS;

    $response = $sdk->sdk->startDocumentAnalysis($request);

    if ($response->startDocumentAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDocumentTextDetection

<p>Starts the asynchronous detection of text in a document. Amazon Textract can detect lines of text and the words that make up a line of text.</p> <p> <code>StartDocumentTextDetection</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name of the document. </p> <p> <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When text detection is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetDocumentTextDetection</a>, and pass the job identifier (<code>JobId</code>) from the initial call to <code>StartDocumentTextDetection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDocumentTextDetectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDocumentTextDetectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannel;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartDocumentTextDetectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDocumentTextDetectionRequest();
    $request->startDocumentTextDetectionRequest = new StartDocumentTextDetectionRequest();
    $request->startDocumentTextDetectionRequest->clientRequestToken = 'quae';
    $request->startDocumentTextDetectionRequest->documentLocation = new DocumentLocation();
    $request->startDocumentTextDetectionRequest->documentLocation->s3Object = new S3Object();
    $request->startDocumentTextDetectionRequest->documentLocation->s3Object->bucket = 'ipsum';
    $request->startDocumentTextDetectionRequest->documentLocation->s3Object->name = 'Virgil Mante';
    $request->startDocumentTextDetectionRequest->documentLocation->s3Object->version = 'praesentium';
    $request->startDocumentTextDetectionRequest->jobTag = 'rem';
    $request->startDocumentTextDetectionRequest->kmsKeyId = 'voluptates';
    $request->startDocumentTextDetectionRequest->notificationChannel = new NotificationChannel();
    $request->startDocumentTextDetectionRequest->notificationChannel->roleArn = 'quasi';
    $request->startDocumentTextDetectionRequest->notificationChannel->snsTopicArn = 'repudiandae';
    $request->startDocumentTextDetectionRequest->outputConfig = new OutputConfig();
    $request->startDocumentTextDetectionRequest->outputConfig->s3Bucket = 'sint';
    $request->startDocumentTextDetectionRequest->outputConfig->s3Prefix = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = StartDocumentTextDetectionXAmzTargetEnum::TEXTRACT_START_DOCUMENT_TEXT_DETECTION;

    $response = $sdk->sdk->startDocumentTextDetection($request);

    if ($response->startDocumentTextDetectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startExpenseAnalysis

<p>Starts the asynchronous analysis of invoices or receipts for data like contact information, items purchased, and vendor names.</p> <p> <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the document in that bucket. </p> <p> <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>. To obtain the results of the invoice and receipt analysis operation, ensure that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was returned by your call to <code>StartExpenseAnalysis</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartExpenseAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartExpenseAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannel;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartExpenseAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartExpenseAnalysisRequest();
    $request->startExpenseAnalysisRequest = new StartExpenseAnalysisRequest();
    $request->startExpenseAnalysisRequest->clientRequestToken = 'deserunt';
    $request->startExpenseAnalysisRequest->documentLocation = new DocumentLocation();
    $request->startExpenseAnalysisRequest->documentLocation->s3Object = new S3Object();
    $request->startExpenseAnalysisRequest->documentLocation->s3Object->bucket = 'distinctio';
    $request->startExpenseAnalysisRequest->documentLocation->s3Object->name = 'Francisco Gleason';
    $request->startExpenseAnalysisRequest->documentLocation->s3Object->version = 'cupiditate';
    $request->startExpenseAnalysisRequest->jobTag = 'quos';
    $request->startExpenseAnalysisRequest->kmsKeyId = 'perferendis';
    $request->startExpenseAnalysisRequest->notificationChannel = new NotificationChannel();
    $request->startExpenseAnalysisRequest->notificationChannel->roleArn = 'magni';
    $request->startExpenseAnalysisRequest->notificationChannel->snsTopicArn = 'assumenda';
    $request->startExpenseAnalysisRequest->outputConfig = new OutputConfig();
    $request->startExpenseAnalysisRequest->outputConfig->s3Bucket = 'ipsam';
    $request->startExpenseAnalysisRequest->outputConfig->s3Prefix = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = StartExpenseAnalysisXAmzTargetEnum::TEXTRACT_START_EXPENSE_ANALYSIS;

    $response = $sdk->sdk->startExpenseAnalysis($request);

    if ($response->startExpenseAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startLendingAnalysis

<p>Starts the classification and analysis of an input document. <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an Amazon S3 bucket.</p> <p> <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket name and the file name of the document. </p> <p> <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use to get the results of the operation. When the text analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that you specify in <code>NotificationChannel</code>. To get the results of the text analysis operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results of the analysis.</p> <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained within the specified prefix in a directory labeled with the job-id. In the directory there are 3 sub-directories: </p> <ul> <li> <p>detailedResponse (contains the GetLendingAnalysis response)</p> </li> <li> <p>summaryResponse (for the GetLendingAnalysisSummary response)</p> </li> <li> <p>splitDocuments (documents split across logical boundaries)</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartLendingAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartLendingAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3Object;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannel;
use \OpenAPI\OpenAPI\Models\Shared\OutputConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartLendingAnalysisXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartLendingAnalysisRequest();
    $request->startLendingAnalysisRequest = new StartLendingAnalysisRequest();
    $request->startLendingAnalysisRequest->clientRequestToken = 'delectus';
    $request->startLendingAnalysisRequest->documentLocation = new DocumentLocation();
    $request->startLendingAnalysisRequest->documentLocation->s3Object = new S3Object();
    $request->startLendingAnalysisRequest->documentLocation->s3Object->bucket = 'eum';
    $request->startLendingAnalysisRequest->documentLocation->s3Object->name = 'Sheri Mayer';
    $request->startLendingAnalysisRequest->documentLocation->s3Object->version = 'necessitatibus';
    $request->startLendingAnalysisRequest->jobTag = 'sint';
    $request->startLendingAnalysisRequest->kmsKeyId = 'officia';
    $request->startLendingAnalysisRequest->notificationChannel = new NotificationChannel();
    $request->startLendingAnalysisRequest->notificationChannel->roleArn = 'dolor';
    $request->startLendingAnalysisRequest->notificationChannel->snsTopicArn = 'debitis';
    $request->startLendingAnalysisRequest->outputConfig = new OutputConfig();
    $request->startLendingAnalysisRequest->outputConfig->s3Bucket = 'a';
    $request->startLendingAnalysisRequest->outputConfig->s3Prefix = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = StartLendingAnalysisXAmzTargetEnum::TEXTRACT_START_LENDING_ANALYSIS;

    $response = $sdk->sdk->startLendingAnalysis($request);

    if ($response->startLendingAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
