# SDK

## Overview

Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more.

Amazon Web Services documentation
<https://docs.aws.amazon.com/comprehend/>
### Available Operations

* [batchDetectDominantLanguage](#batchdetectdominantlanguage) - Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* [batchDetectEntities](#batchdetectentities) - Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. 
* [batchDetectKeyPhrases](#batchdetectkeyphrases) - Detects the key noun phrases found in a batch of documents.
* [batchDetectSentiment](#batchdetectsentiment) - Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
* [batchDetectSyntax](#batchdetectsyntax) - Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 
* [batchDetectTargetedSentiment](#batchdetecttargetedsentiment) - <p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
* [classifyDocument](#classifydocument) - <p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
* [containsPiiEntities](#containspiientities) - Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
* [createDataset](#createdataset) - Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [createDocumentClassifier](#createdocumentclassifier) - Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. 
* [createEndpoint](#createendpoint) - Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [createEntityRecognizer](#createentityrecognizer) - Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. 
* [createFlywheel](#createflywheel) - <p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
* [deleteDocumentClassifier](#deletedocumentclassifier) - <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
* [deleteEndpoint](#deleteendpoint) - Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [deleteEntityRecognizer](#deleteentityrecognizer) - <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
* [deleteFlywheel](#deleteflywheel) - <p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource-based policy that is attached to a custom model.
* [describeDataset](#describedataset) - Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [describeDocumentClassificationJob](#describedocumentclassificationjob) - Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
* [describeDocumentClassifier](#describedocumentclassifier) - Gets the properties associated with a document classifier.
* [describeDominantLanguageDetectionJob](#describedominantlanguagedetectionjob) - Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
* [describeEndpoint](#describeendpoint) - Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [describeEntitiesDetectionJob](#describeentitiesdetectionjob) - Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
* [describeEntityRecognizer](#describeentityrecognizer) - Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
* [describeEventsDetectionJob](#describeeventsdetectionjob) - Gets the status and details of an events detection job.
* [describeFlywheel](#describeflywheel) - Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [describeFlywheelIteration](#describeflywheeliteration) - Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [describeKeyPhrasesDetectionJob](#describekeyphrasesdetectionjob) - Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
* [describePiiEntitiesDetectionJob](#describepiientitiesdetectionjob) - Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
* [describeResourcePolicy](#describeresourcepolicy) - Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.
* [describeSentimentDetectionJob](#describesentimentdetectionjob) - Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
* [describeTargetedSentimentDetectionJob](#describetargetedsentimentdetectionjob) - Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.
* [describeTopicsDetectionJob](#describetopicsdetectionjob) - Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
* [detectDominantLanguage](#detectdominantlanguage) - Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* [detectEntities](#detectentities) - <p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
* [detectKeyPhrases](#detectkeyphrases) - Detects the key noun phrases found in the text. 
* [detectPiiEntities](#detectpiientities) - Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
* [detectSentiment](#detectsentiment) - Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 
* [detectSyntax](#detectsyntax) - Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 
* [detectTargetedSentiment](#detecttargetedsentiment) - <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
* [importModel](#importmodel) - <p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>
* [listDatasets](#listdatasets) - List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [listDocumentClassificationJobs](#listdocumentclassificationjobs) - Gets a list of the documentation classification jobs that you have submitted.
* [listDocumentClassifierSummaries](#listdocumentclassifiersummaries) - Gets a list of summaries of the document classifiers that you have created
* [listDocumentClassifiers](#listdocumentclassifiers) - Gets a list of the document classifiers that you have created.
* [listDominantLanguageDetectionJobs](#listdominantlanguagedetectionjobs) - Gets a list of the dominant language detection jobs that you have submitted.
* [listEndpoints](#listendpoints) - Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [listEntitiesDetectionJobs](#listentitiesdetectionjobs) - Gets a list of the entity detection jobs that you have submitted.
* [listEntityRecognizerSummaries](#listentityrecognizersummaries) - Gets a list of summaries for the entity recognizers that you have created.
* [listEntityRecognizers](#listentityrecognizers) - <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
* [listEventsDetectionJobs](#listeventsdetectionjobs) - Gets a list of the events detection jobs that you have submitted.
* [listFlywheelIterationHistory](#listflywheeliterationhistory) - Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [listFlywheels](#listflywheels) - Gets a list of the flywheels that you have created.
* [listKeyPhrasesDetectionJobs](#listkeyphrasesdetectionjobs) - Get a list of key phrase detection jobs that you have submitted.
* [listPiiEntitiesDetectionJobs](#listpiientitiesdetectionjobs) - Gets a list of the PII entity detection jobs that you have submitted.
* [listSentimentDetectionJobs](#listsentimentdetectionjobs) - Gets a list of sentiment detection jobs that you have submitted.
* [listTagsForResource](#listtagsforresource) - Lists all tags associated with a given Amazon Comprehend resource. 
* [listTargetedSentimentDetectionJobs](#listtargetedsentimentdetectionjobs) - Gets a list of targeted sentiment detection jobs that you have submitted.
* [listTopicsDetectionJobs](#listtopicsdetectionjobs) - Gets a list of the topic detection jobs that you have submitted.
* [putResourcePolicy](#putresourcepolicy) - Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.
* [startDocumentClassificationJob](#startdocumentclassificationjob) - Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.
* [startDominantLanguageDetectionJob](#startdominantlanguagedetectionjob) - Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
* [startEntitiesDetectionJob](#startentitiesdetectionjob) - <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
* [startEventsDetectionJob](#starteventsdetectionjob) - Starts an asynchronous event detection job for a collection of documents.
* [startFlywheelIteration](#startflywheeliteration) - Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [startKeyPhrasesDetectionJob](#startkeyphrasesdetectionjob) - Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
* [startPiiEntitiesDetectionJob](#startpiientitiesdetectionjob) - Starts an asynchronous PII entity detection job for a collection of documents.
* [startSentimentDetectionJob](#startsentimentdetectionjob) - Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.
* [startTargetedSentimentDetectionJob](#starttargetedsentimentdetectionjob) - Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.
* [startTopicsDetectionJob](#starttopicsdetectionjob) - Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
* [stopDominantLanguageDetectionJob](#stopdominantlanguagedetectionjob) - <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [stopEntitiesDetectionJob](#stopentitiesdetectionjob) - <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [stopEventsDetectionJob](#stopeventsdetectionjob) - Stops an events detection job in progress.
* [stopKeyPhrasesDetectionJob](#stopkeyphrasesdetectionjob) - <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [stopPiiEntitiesDetectionJob](#stoppiientitiesdetectionjob) - Stops a PII entities detection job in progress.
* [stopSentimentDetectionJob](#stopsentimentdetectionjob) - <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [stopTargetedSentimentDetectionJob](#stoptargetedsentimentdetectionjob) - <p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [stopTrainingDocumentClassifier](#stoptrainingdocumentclassifier) - <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
* [stopTrainingEntityRecognizer](#stoptrainingentityrecognizer) - <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
* [tagResource](#tagresource) - Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
* [untagResource](#untagresource) - Removes a specific tag associated with an Amazon Comprehend resource. 
* [updateEndpoint](#updateendpoint) - Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [updateFlywheel](#updateflywheel) - Update the configuration information for an existing flywheel.

## batchDetectDominantLanguage

Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageRequest;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageResponse;
import org.openapis.openapi.models.operations.BatchDetectDominantLanguageXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDetectDominantLanguageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectDominantLanguageRequest req = new BatchDetectDominantLanguageRequest(                new BatchDetectDominantLanguageRequest(                new String[]{{
                                                add("debitis"),
                                                add("ipsa"),
                                            }});, BatchDetectDominantLanguageXAmzTargetEnum.COMPREHEND20171127_BATCH_DETECT_DOMINANT_LANGUAGE) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            BatchDetectDominantLanguageResponse res = sdk.sdk.batchDetectDominantLanguage(req);

            if (res.batchDetectDominantLanguageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDetectEntities

Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDetectEntitiesRequest;
import org.openapis.openapi.models.operations.BatchDetectEntitiesResponse;
import org.openapis.openapi.models.operations.BatchDetectEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDetectEntitiesRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectEntitiesRequest req = new BatchDetectEntitiesRequest(                new BatchDetectEntitiesRequest(LanguageCodeEnum.AR,                 new String[]{{
                                                add("recusandae"),
                                                add("temporibus"),
                                            }});, BatchDetectEntitiesXAmzTargetEnum.COMPREHEND20171127_BATCH_DETECT_ENTITIES) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            BatchDetectEntitiesResponse res = sdk.sdk.batchDetectEntities(req);

            if (res.batchDetectEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDetectKeyPhrases

Detects the key noun phrases found in a batch of documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDetectKeyPhrasesRequest;
import org.openapis.openapi.models.operations.BatchDetectKeyPhrasesResponse;
import org.openapis.openapi.models.operations.BatchDetectKeyPhrasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDetectKeyPhrasesRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectKeyPhrasesRequest req = new BatchDetectKeyPhrasesRequest(                new BatchDetectKeyPhrasesRequest(LanguageCodeEnum.KO,                 new String[]{{
                                                add("at"),
                                            }});, BatchDetectKeyPhrasesXAmzTargetEnum.COMPREHEND20171127_BATCH_DETECT_KEY_PHRASES) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            BatchDetectKeyPhrasesResponse res = sdk.sdk.batchDetectKeyPhrases(req);

            if (res.batchDetectKeyPhrasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDetectSentiment

Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDetectSentimentRequest;
import org.openapis.openapi.models.operations.BatchDetectSentimentResponse;
import org.openapis.openapi.models.operations.BatchDetectSentimentXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDetectSentimentRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectSentimentRequest req = new BatchDetectSentimentRequest(                new BatchDetectSentimentRequest(LanguageCodeEnum.JA,                 new String[]{{
                                                add("nam"),
                                            }});, BatchDetectSentimentXAmzTargetEnum.COMPREHEND20171127_BATCH_DETECT_SENTIMENT) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "fugit";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "hic";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "totam";
            }};            

            BatchDetectSentimentResponse res = sdk.sdk.batchDetectSentiment(req);

            if (res.batchDetectSentimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDetectSyntax

Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDetectSyntaxRequest;
import org.openapis.openapi.models.operations.BatchDetectSyntaxResponse;
import org.openapis.openapi.models.operations.BatchDetectSyntaxXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDetectSyntaxRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyntaxLanguageCodeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectSyntaxRequest req = new BatchDetectSyntaxRequest(                new BatchDetectSyntaxRequest(SyntaxLanguageCodeEnum.FR,                 new String[]{{
                                                add("modi"),
                                                add("qui"),
                                            }});, BatchDetectSyntaxXAmzTargetEnum.COMPREHEND20171127_BATCH_DETECT_SYNTAX) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            BatchDetectSyntaxResponse res = sdk.sdk.batchDetectSyntax(req);

            if (res.batchDetectSyntaxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDetectTargetedSentiment

<p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDetectTargetedSentimentRequest;
import org.openapis.openapi.models.operations.BatchDetectTargetedSentimentResponse;
import org.openapis.openapi.models.operations.BatchDetectTargetedSentimentXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDetectTargetedSentimentRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDetectTargetedSentimentRequest req = new BatchDetectTargetedSentimentRequest(                new BatchDetectTargetedSentimentRequest(LanguageCodeEnum.HI,                 new String[]{{
                                                add("iste"),
                                            }});, BatchDetectTargetedSentimentXAmzTargetEnum.COMPREHEND20171127_BATCH_DETECT_TARGETED_SENTIMENT) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            BatchDetectTargetedSentimentResponse res = sdk.sdk.batchDetectTargetedSentiment(req);

            if (res.batchDetectTargetedSentimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## classifyDocument

<p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClassifyDocumentRequest;
import org.openapis.openapi.models.operations.ClassifyDocumentResponse;
import org.openapis.openapi.models.operations.ClassifyDocumentXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClassifyDocumentRequest;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClassifyDocumentRequest req = new ClassifyDocumentRequest(                new ClassifyDocumentRequest("iste") {{
                                bytes = "iure";
                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_ANALYZE_DOCUMENT) {{
                                    documentReadMode = DocumentReadModeEnum.FORCE_DOCUMENT_READ_ACTION;
                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                    }};
                                }};;
                                text = "reiciendis";
                            }};, ClassifyDocumentXAmzTargetEnum.COMPREHEND20171127_CLASSIFY_DOCUMENT) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            ClassifyDocumentResponse res = sdk.sdk.classifyDocument(req);

            if (res.classifyDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## containsPiiEntities

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContainsPiiEntitiesRequest;
import org.openapis.openapi.models.operations.ContainsPiiEntitiesResponse;
import org.openapis.openapi.models.operations.ContainsPiiEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ContainsPiiEntitiesRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ContainsPiiEntitiesRequest req = new ContainsPiiEntitiesRequest(                new ContainsPiiEntitiesRequest(LanguageCodeEnum.DE, "omnis");, ContainsPiiEntitiesXAmzTargetEnum.COMPREHEND20171127_CONTAINS_PII_ENTITIES) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
            }};            

            ContainsPiiEntitiesResponse res = sdk.sdk.containsPiiEntities(req);

            if (res.containsPiiEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataset

Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDatasetRequest;
import org.openapis.openapi.models.operations.CreateDatasetResponse;
import org.openapis.openapi.models.operations.CreateDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AugmentedManifestsDocumentTypeFormatEnum;
import org.openapis.openapi.models.shared.CreateDatasetRequest;
import org.openapis.openapi.models.shared.DatasetAugmentedManifestsListItem;
import org.openapis.openapi.models.shared.DatasetDataFormatEnum;
import org.openapis.openapi.models.shared.DatasetDocumentClassifierInputDataConfig;
import org.openapis.openapi.models.shared.DatasetEntityRecognizerAnnotations;
import org.openapis.openapi.models.shared.DatasetEntityRecognizerDocuments;
import org.openapis.openapi.models.shared.DatasetEntityRecognizerEntityList;
import org.openapis.openapi.models.shared.DatasetEntityRecognizerInputDataConfig;
import org.openapis.openapi.models.shared.DatasetInputDataConfig;
import org.openapis.openapi.models.shared.DatasetTypeEnum;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDatasetRequest req = new CreateDatasetRequest(                new CreateDatasetRequest("architecto", "mollitia",                 new DatasetInputDataConfig() {{
                                                augmentedManifests = new org.openapis.openapi.models.shared.DatasetAugmentedManifestsListItem[]{{
                                                    add(new DatasetAugmentedManifestsListItem(                new String[]{{
                                                                        add("quam"),
                                                                        add("molestiae"),
                                                                    }}, "velit") {{
                                                        annotationDataS3Uri = "culpa";
                                                        attributeNames = new String[]{{
                                                            add("repellat"),
                                                        }};
                                                        documentType = AugmentedManifestsDocumentTypeFormatEnum.SEMI_STRUCTURED_DOCUMENT;
                                                        s3Uri = "occaecati";
                                                        sourceDocumentsS3Uri = "numquam";
                                                    }}),
                                                }};
                                                dataFormat = DatasetDataFormatEnum.AUGMENTED_MANIFEST;
                                                documentClassifierInputDataConfig = new DatasetDocumentClassifierInputDataConfig("quia") {{
                                                    labelDelimiter = "quis";
                                                }};;
                                                entityRecognizerInputDataConfig = new DatasetEntityRecognizerInputDataConfig(                new DatasetEntityRecognizerDocuments("vitae") {{
                                                                    inputFormat = InputFormatEnum.ONE_DOC_PER_LINE;
                                                                }};) {{
                                                    annotations = new DatasetEntityRecognizerAnnotations("animi");;
                                                    entityList = new DatasetEntityRecognizerEntityList("enim");;
                                                }};;
                                            }};) {{
                                clientRequestToken = "odit";
                                datasetType = DatasetTypeEnum.TEST;
                                description = "sequi";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("possimus") {{
                                        key = "ipsam";
                                        value = "id";
                                    }}),
                                    add(new Tag("error") {{
                                        key = "aut";
                                        value = "quasi";
                                    }}),
                                    add(new Tag("quasi") {{
                                        key = "temporibus";
                                        value = "laborum";
                                    }}),
                                    add(new Tag("vero") {{
                                        key = "reiciendis";
                                        value = "voluptatibus";
                                    }}),
                                }};
                            }};, CreateDatasetXAmzTargetEnum.COMPREHEND20171127_CREATE_DATASET) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            CreateDatasetResponse res = sdk.sdk.createDataset(req);

            if (res.createDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDocumentClassifier

Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocumentClassifierRequest;
import org.openapis.openapi.models.operations.CreateDocumentClassifierResponse;
import org.openapis.openapi.models.operations.CreateDocumentClassifierXAmzTargetEnum;
import org.openapis.openapi.models.shared.AugmentedManifestsDocumentTypeFormatEnum;
import org.openapis.openapi.models.shared.AugmentedManifestsListItem;
import org.openapis.openapi.models.shared.CreateDocumentClassifierRequest;
import org.openapis.openapi.models.shared.DocumentClassifierDataFormatEnum;
import org.openapis.openapi.models.shared.DocumentClassifierDocumentTypeFormatEnum;
import org.openapis.openapi.models.shared.DocumentClassifierDocuments;
import org.openapis.openapi.models.shared.DocumentClassifierInputDataConfig;
import org.openapis.openapi.models.shared.DocumentClassifierModeEnum;
import org.openapis.openapi.models.shared.DocumentClassifierOutputDataConfig;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SplitEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDocumentClassifierRequest req = new CreateDocumentClassifierRequest(                new CreateDocumentClassifierRequest("doloremque", "reprehenderit",                 new DocumentClassifierInputDataConfig() {{
                                                augmentedManifests = new org.openapis.openapi.models.shared.AugmentedManifestsListItem[]{{
                                                    add(new AugmentedManifestsListItem(                new String[]{{
                                                                        add("accusamus"),
                                                                        add("commodi"),
                                                                    }}, "repudiandae") {{
                                                        annotationDataS3Uri = "maiores";
                                                        attributeNames = new String[]{{
                                                            add("corporis"),
                                                        }};
                                                        documentType = AugmentedManifestsDocumentTypeFormatEnum.PLAIN_TEXT_DOCUMENT;
                                                        s3Uri = "iusto";
                                                        sourceDocumentsS3Uri = "dicta";
                                                        split = SplitEnum.TEST;
                                                    }}),
                                                    add(new AugmentedManifestsListItem(                new String[]{{
                                                                        add("rem"),
                                                                        add("voluptates"),
                                                                        add("quasi"),
                                                                    }}, "repudiandae") {{
                                                        annotationDataS3Uri = "quae";
                                                        attributeNames = new String[]{{
                                                            add("quidem"),
                                                        }};
                                                        documentType = AugmentedManifestsDocumentTypeFormatEnum.SEMI_STRUCTURED_DOCUMENT;
                                                        s3Uri = "excepturi";
                                                        sourceDocumentsS3Uri = "pariatur";
                                                        split = SplitEnum.TRAIN;
                                                    }}),
                                                }};
                                                dataFormat = DocumentClassifierDataFormatEnum.AUGMENTED_MANIFEST;
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                                                    documentReadMode = DocumentReadModeEnum.FORCE_DOCUMENT_READ_ACTION;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                    }};
                                                }};;
                                                documentType = DocumentClassifierDocumentTypeFormatEnum.SEMI_STRUCTURED_DOCUMENT;
                                                documents = new DocumentClassifierDocuments("quibusdam") {{
                                                    testS3Uri = "explicabo";
                                                }};;
                                                labelDelimiter = "deserunt";
                                                s3Uri = "distinctio";
                                                testS3Uri = "quibusdam";
                                            }};, LanguageCodeEnum.DE) {{
                                clientRequestToken = "modi";
                                mode = DocumentClassifierModeEnum.MULTI_CLASS;
                                modelKmsKeyId = "aliquid";
                                modelPolicy = "cupiditate";
                                outputDataConfig = new DocumentClassifierOutputDataConfig() {{
                                    flywheelStatsS3Prefix = "quos";
                                    kmsKeyId = "perferendis";
                                    s3Uri = "magni";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("fugit") {{
                                        key = "ipsam";
                                        value = "alias";
                                    }}),
                                    add(new Tag("tempora") {{
                                        key = "dolorum";
                                        value = "excepturi";
                                    }}),
                                    add(new Tag("labore") {{
                                        key = "facilis";
                                        value = "tempore";
                                    }}),
                                    add(new Tag("non") {{
                                        key = "delectus";
                                        value = "eum";
                                    }}),
                                }};
                                versionName = "eligendi";
                                volumeKmsKeyId = "sint";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("provident"),
                                                    add("necessitatibus"),
                                                }},                 new String[]{{
                                                    add("officia"),
                                                    add("dolor"),
                                                    add("debitis"),
                                                }});;
                            }};, CreateDocumentClassifierXAmzTargetEnum.COMPREHEND20171127_CREATE_DOCUMENT_CLASSIFIER) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "in";
                xAmzDate = "in";
                xAmzSecurityToken = "illum";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "rerum";
            }};            

            CreateDocumentClassifierResponse res = sdk.sdk.createDocumentClassifier(req);

            if (res.createDocumentClassifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEndpoint

Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEndpointRequest;
import org.openapis.openapi.models.operations.CreateEndpointResponse;
import org.openapis.openapi.models.operations.CreateEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEndpointRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEndpointRequest req = new CreateEndpointRequest(                new CreateEndpointRequest(297437L, "cumque") {{
                                clientRequestToken = "facere";
                                dataAccessRoleArn = "ea";
                                flywheelArn = "aliquid";
                                modelArn = "laborum";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("enim") {{
                                        key = "non";
                                        value = "occaecati";
                                    }}),
                                    add(new Tag("quidem") {{
                                        key = "accusamus";
                                        value = "delectus";
                                    }}),
                                    add(new Tag("id") {{
                                        key = "provident";
                                        value = "nam";
                                    }}),
                                    add(new Tag("sapiente") {{
                                        key = "blanditiis";
                                        value = "deleniti";
                                    }}),
                                }};
                            }};, CreateEndpointXAmzTargetEnum.COMPREHEND20171127_CREATE_ENDPOINT) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
            }};            

            CreateEndpointResponse res = sdk.sdk.createEndpoint(req);

            if (res.createEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEntityRecognizer

Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEntityRecognizerRequest;
import org.openapis.openapi.models.operations.CreateEntityRecognizerResponse;
import org.openapis.openapi.models.operations.CreateEntityRecognizerXAmzTargetEnum;
import org.openapis.openapi.models.shared.AugmentedManifestsDocumentTypeFormatEnum;
import org.openapis.openapi.models.shared.AugmentedManifestsListItem;
import org.openapis.openapi.models.shared.CreateEntityRecognizerRequest;
import org.openapis.openapi.models.shared.EntityRecognizerAnnotations;
import org.openapis.openapi.models.shared.EntityRecognizerDataFormatEnum;
import org.openapis.openapi.models.shared.EntityRecognizerDocuments;
import org.openapis.openapi.models.shared.EntityRecognizerEntityList;
import org.openapis.openapi.models.shared.EntityRecognizerInputDataConfig;
import org.openapis.openapi.models.shared.EntityTypesListItem;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SplitEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEntityRecognizerRequest req = new CreateEntityRecognizerRequest(                new CreateEntityRecognizerRequest("nihil",                 new EntityRecognizerInputDataConfig(                new org.openapis.openapi.models.shared.EntityTypesListItem[]{{
                                                                add(new EntityTypesListItem("id") {{
                                                                    type = "distinctio";
                                                                }}),
                                                                add(new EntityTypesListItem("labore") {{
                                                                    type = "labore";
                                                                }}),
                                                            }}) {{
                                                annotations = new EntityRecognizerAnnotations("suscipit") {{
                                                    testS3Uri = "natus";
                                                }};;
                                                augmentedManifests = new org.openapis.openapi.models.shared.AugmentedManifestsListItem[]{{
                                                    add(new AugmentedManifestsListItem(                new String[]{{
                                                                        add("accusantium"),
                                                                        add("mollitia"),
                                                                        add("reiciendis"),
                                                                    }}, "mollitia") {{
                                                        annotationDataS3Uri = "eum";
                                                        attributeNames = new String[]{{
                                                            add("aspernatur"),
                                                            add("architecto"),
                                                            add("magnam"),
                                                            add("et"),
                                                        }};
                                                        documentType = AugmentedManifestsDocumentTypeFormatEnum.SEMI_STRUCTURED_DOCUMENT;
                                                        s3Uri = "ullam";
                                                        sourceDocumentsS3Uri = "provident";
                                                        split = SplitEnum.TEST;
                                                    }}),
                                                    add(new AugmentedManifestsListItem(                new String[]{{
                                                                        add("debitis"),
                                                                        add("eius"),
                                                                        add("maxime"),
                                                                        add("deleniti"),
                                                                    }}, "facilis") {{
                                                        annotationDataS3Uri = "ad";
                                                        attributeNames = new String[]{{
                                                            add("dolor"),
                                                            add("necessitatibus"),
                                                        }};
                                                        documentType = AugmentedManifestsDocumentTypeFormatEnum.PLAIN_TEXT_DOCUMENT;
                                                        s3Uri = "nemo";
                                                        sourceDocumentsS3Uri = "quasi";
                                                        split = SplitEnum.TRAIN;
                                                    }}),
                                                    add(new AugmentedManifestsListItem(                new String[]{{
                                                                        add("quibusdam"),
                                                                        add("sed"),
                                                                        add("saepe"),
                                                                        add("pariatur"),
                                                                    }}, "accusantium") {{
                                                        annotationDataS3Uri = "in";
                                                        attributeNames = new String[]{{
                                                            add("architecto"),
                                                        }};
                                                        documentType = AugmentedManifestsDocumentTypeFormatEnum.SEMI_STRUCTURED_DOCUMENT;
                                                        s3Uri = "ullam";
                                                        sourceDocumentsS3Uri = "expedita";
                                                        split = SplitEnum.TRAIN;
                                                    }}),
                                                }};
                                                dataFormat = EntityRecognizerDataFormatEnum.COMPREHEND_CSV;
                                                documents = new EntityRecognizerDocuments("praesentium") {{
                                                    inputFormat = InputFormatEnum.ONE_DOC_PER_LINE;
                                                    testS3Uri = "magni";
                                                }};;
                                                entityList = new EntityRecognizerEntityList("sunt");;
                                            }};, LanguageCodeEnum.KO, "illum") {{
                                clientRequestToken = "pariatur";
                                modelKmsKeyId = "maxime";
                                modelPolicy = "ea";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("accusantium") {{
                                        key = "odit";
                                        value = "ea";
                                    }}),
                                    add(new Tag("quidem") {{
                                        key = "ab";
                                        value = "maiores";
                                    }}),
                                    add(new Tag("autem") {{
                                        key = "ipsam";
                                        value = "voluptate";
                                    }}),
                                }};
                                versionName = "nam";
                                volumeKmsKeyId = "eaque";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("nemo"),
                                                    add("voluptatibus"),
                                                    add("perferendis"),
                                                    add("fugiat"),
                                                }},                 new String[]{{
                                                    add("aut"),
                                                }});;
                            }};, CreateEntityRecognizerXAmzTargetEnum.COMPREHEND20171127_CREATE_ENTITY_RECOGNIZER) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
            }};            

            CreateEntityRecognizerResponse res = sdk.sdk.createEntityRecognizer(req);

            if (res.createEntityRecognizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFlywheel

<p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFlywheelRequest;
import org.openapis.openapi.models.operations.CreateFlywheelResponse;
import org.openapis.openapi.models.operations.CreateFlywheelXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFlywheelRequest;
import org.openapis.openapi.models.shared.DataSecurityConfig;
import org.openapis.openapi.models.shared.DocumentClassificationConfig;
import org.openapis.openapi.models.shared.DocumentClassifierModeEnum;
import org.openapis.openapi.models.shared.EntityRecognitionConfig;
import org.openapis.openapi.models.shared.EntityTypesListItem;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.ModelTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TaskConfig;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFlywheelRequest req = new CreateFlywheelRequest(                new CreateFlywheelRequest("dignissimos", "eaque", "quis") {{
                                activeModelArn = "nesciunt";
                                clientRequestToken = "eos";
                                dataSecurityConfig = new DataSecurityConfig() {{
                                    dataLakeKmsKeyId = "perferendis";
                                    modelKmsKeyId = "dolores";
                                    volumeKmsKeyId = "minus";
                                    vpcConfig = new VpcConfig(                new String[]{{
                                                        add("dolor"),
                                                        add("vero"),
                                                    }},                 new String[]{{
                                                        add("hic"),
                                                        add("recusandae"),
                                                    }});;
                                }};;
                                modelType = ModelTypeEnum.ENTITY_RECOGNIZER;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("porro") {{
                                        key = "perspiciatis";
                                        value = "voluptatem";
                                    }}),
                                    add(new Tag("error") {{
                                        key = "consequuntur";
                                        value = "blanditiis";
                                    }}),
                                    add(new Tag("rerum") {{
                                        key = "eaque";
                                        value = "occaecati";
                                    }}),
                                }};
                                taskConfig = new TaskConfig(LanguageCodeEnum.FR) {{
                                    documentClassificationConfig = new DocumentClassificationConfig(DocumentClassifierModeEnum.MULTI_LABEL) {{
                                        labels = new String[]{{
                                            add("modi"),
                                            add("iste"),
                                            add("dolorum"),
                                            add("deleniti"),
                                        }};
                                    }};;
                                    entityRecognitionConfig = new EntityRecognitionConfig(                new org.openapis.openapi.models.shared.EntityTypesListItem[]{{
                                                        add(new EntityTypesListItem("nobis") {{
                                                            type = "provident";
                                                        }}),
                                                        add(new EntityTypesListItem("delectus") {{
                                                            type = "libero";
                                                        }}),
                                                        add(new EntityTypesListItem("quos") {{
                                                            type = "quaerat";
                                                        }}),
                                                        add(new EntityTypesListItem("dolorem") {{
                                                            type = "aliquid";
                                                        }}),
                                                    }});;
                                }};;
                            }};, CreateFlywheelXAmzTargetEnum.COMPREHEND20171127_CREATE_FLYWHEEL) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "qui";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "cum";
            }};            

            CreateFlywheelResponse res = sdk.sdk.createFlywheel(req);

            if (res.createFlywheelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDocumentClassifier

<p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDocumentClassifierRequest;
import org.openapis.openapi.models.operations.DeleteDocumentClassifierResponse;
import org.openapis.openapi.models.operations.DeleteDocumentClassifierXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDocumentClassifierRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDocumentClassifierRequest req = new DeleteDocumentClassifierRequest(                new DeleteDocumentClassifierRequest("dignissimos");, DeleteDocumentClassifierXAmzTargetEnum.COMPREHEND20171127_DELETE_DOCUMENT_CLASSIFIER) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "dolorum";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteDocumentClassifierResponse res = sdk.sdk.deleteDocumentClassifier(req);

            if (res.deleteDocumentClassifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEndpoint

Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEndpointRequest;
import org.openapis.openapi.models.operations.DeleteEndpointResponse;
import org.openapis.openapi.models.operations.DeleteEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEndpointRequest req = new DeleteEndpointRequest(                new DeleteEndpointRequest("odio");, DeleteEndpointXAmzTargetEnum.COMPREHEND20171127_DELETE_ENDPOINT) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            DeleteEndpointResponse res = sdk.sdk.deleteEndpoint(req);

            if (res.deleteEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEntityRecognizer

<p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEntityRecognizerRequest;
import org.openapis.openapi.models.operations.DeleteEntityRecognizerResponse;
import org.openapis.openapi.models.operations.DeleteEntityRecognizerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEntityRecognizerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEntityRecognizerRequest req = new DeleteEntityRecognizerRequest(                new DeleteEntityRecognizerRequest("sit");, DeleteEntityRecognizerXAmzTargetEnum.COMPREHEND20171127_DELETE_ENTITY_RECOGNIZER) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ab";
                xAmzCredential = "soluta";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dolorum";
            }};            

            DeleteEntityRecognizerResponse res = sdk.sdk.deleteEntityRecognizer(req);

            if (res.deleteEntityRecognizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFlywheel

<p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFlywheelRequest;
import org.openapis.openapi.models.operations.DeleteFlywheelResponse;
import org.openapis.openapi.models.operations.DeleteFlywheelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFlywheelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFlywheelRequest req = new DeleteFlywheelRequest(                new DeleteFlywheelRequest("omnis");, DeleteFlywheelXAmzTargetEnum.COMPREHEND20171127_DELETE_FLYWHEEL) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "asperiores";
                xAmzDate = "nihil";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "id";
            }};            

            DeleteFlywheelResponse res = sdk.sdk.deleteFlywheel(req);

            if (res.deleteFlywheelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes a resource-based policy that is attached to a custom model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.operations.DeleteResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequest("eius") {{
                                policyRevisionId = "aspernatur";
                            }};, DeleteResourcePolicyXAmzTargetEnum.COMPREHEND20171127_DELETE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "optio";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "ad";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "suscipit";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDataset

Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDatasetRequest;
import org.openapis.openapi.models.operations.DescribeDatasetResponse;
import org.openapis.openapi.models.operations.DescribeDatasetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDatasetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDatasetRequest req = new DescribeDatasetRequest(                new DescribeDatasetRequest("provident");, DescribeDatasetXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_DATASET) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "totam";
                xAmzDate = "similique";
                xAmzSecurityToken = "alias";
                xAmzSignature = "at";
                xAmzSignedHeaders = "quaerat";
            }};            

            DescribeDatasetResponse res = sdk.sdk.describeDataset(req);

            if (res.describeDatasetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDocumentClassificationJob

Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDocumentClassificationJobRequest;
import org.openapis.openapi.models.operations.DescribeDocumentClassificationJobResponse;
import org.openapis.openapi.models.operations.DescribeDocumentClassificationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDocumentClassificationJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDocumentClassificationJobRequest req = new DescribeDocumentClassificationJobRequest(                new DescribeDocumentClassificationJobRequest("vel");, DescribeDocumentClassificationJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_DOCUMENT_CLASSIFICATION_JOB) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
            }};            

            DescribeDocumentClassificationJobResponse res = sdk.sdk.describeDocumentClassificationJob(req);

            if (res.describeDocumentClassificationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDocumentClassifier

Gets the properties associated with a document classifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDocumentClassifierRequest;
import org.openapis.openapi.models.operations.DescribeDocumentClassifierResponse;
import org.openapis.openapi.models.operations.DescribeDocumentClassifierXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDocumentClassifierRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDocumentClassifierRequest req = new DescribeDocumentClassifierRequest(                new DescribeDocumentClassifierRequest("ipsum");, DescribeDocumentClassifierXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_DOCUMENT_CLASSIFIER) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            DescribeDocumentClassifierResponse res = sdk.sdk.describeDocumentClassifier(req);

            if (res.describeDocumentClassifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDominantLanguageDetectionJob

Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDominantLanguageDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribeDominantLanguageDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribeDominantLanguageDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDominantLanguageDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDominantLanguageDetectionJobRequest req = new DescribeDominantLanguageDetectionJobRequest(                new DescribeDominantLanguageDetectionJobRequest("sapiente");, DescribeDominantLanguageDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            DescribeDominantLanguageDetectionJobResponse res = sdk.sdk.describeDominantLanguageDetectionJob(req);

            if (res.describeDominantLanguageDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEndpoint

Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEndpointRequest;
import org.openapis.openapi.models.operations.DescribeEndpointResponse;
import org.openapis.openapi.models.operations.DescribeEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEndpointRequest req = new DescribeEndpointRequest(                new DescribeEndpointRequest("voluptas");, DescribeEndpointXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_ENDPOINT) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
            }};            

            DescribeEndpointResponse res = sdk.sdk.describeEndpoint(req);

            if (res.describeEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEntitiesDetectionJob

Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribeEntitiesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEntitiesDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntitiesDetectionJobRequest req = new DescribeEntitiesDetectionJobRequest(                new DescribeEntitiesDetectionJobRequest("soluta");, DescribeEntitiesDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_ENTITIES_DETECTION_JOB) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeEntitiesDetectionJobResponse res = sdk.sdk.describeEntitiesDetectionJob(req);

            if (res.describeEntitiesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEntityRecognizer

Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEntityRecognizerRequest;
import org.openapis.openapi.models.operations.DescribeEntityRecognizerResponse;
import org.openapis.openapi.models.operations.DescribeEntityRecognizerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEntityRecognizerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEntityRecognizerRequest req = new DescribeEntityRecognizerRequest(                new DescribeEntityRecognizerRequest("aliquid");, DescribeEntityRecognizerXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_ENTITY_RECOGNIZER) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "temporibus";
                xAmzDate = "qui";
                xAmzSecurityToken = "neque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "magni";
            }};            

            DescribeEntityRecognizerResponse res = sdk.sdk.describeEntityRecognizer(req);

            if (res.describeEntityRecognizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventsDetectionJob

Gets the status and details of an events detection job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventsDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribeEventsDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribeEventsDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventsDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventsDetectionJobRequest req = new DescribeEventsDetectionJobRequest(                new DescribeEventsDetectionJobRequest("sunt");, DescribeEventsDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_EVENTS_DETECTION_JOB) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeEventsDetectionJobResponse res = sdk.sdk.describeEventsDetectionJob(req);

            if (res.describeEventsDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFlywheel

Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFlywheelRequest;
import org.openapis.openapi.models.operations.DescribeFlywheelResponse;
import org.openapis.openapi.models.operations.DescribeFlywheelXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFlywheelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFlywheelRequest req = new DescribeFlywheelRequest(                new DescribeFlywheelRequest("saepe");, DescribeFlywheelXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_FLYWHEEL) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            DescribeFlywheelResponse res = sdk.sdk.describeFlywheel(req);

            if (res.describeFlywheelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFlywheelIteration

Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFlywheelIterationRequest;
import org.openapis.openapi.models.operations.DescribeFlywheelIterationResponse;
import org.openapis.openapi.models.operations.DescribeFlywheelIterationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFlywheelIterationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFlywheelIterationRequest req = new DescribeFlywheelIterationRequest(                new DescribeFlywheelIterationRequest("dolorem", "dolore");, DescribeFlywheelIterationXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_FLYWHEEL_ITERATION) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quas";
            }};            

            DescribeFlywheelIterationResponse res = sdk.sdk.describeFlywheelIteration(req);

            if (res.describeFlywheelIterationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeKeyPhrasesDetectionJob

Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeKeyPhrasesDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribeKeyPhrasesDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribeKeyPhrasesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeKeyPhrasesDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeKeyPhrasesDetectionJobRequest req = new DescribeKeyPhrasesDetectionJobRequest(                new DescribeKeyPhrasesDetectionJobRequest("consequatur");, DescribeKeyPhrasesDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_KEY_PHRASES_DETECTION_JOB) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "porro";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ut";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DescribeKeyPhrasesDetectionJobResponse res = sdk.sdk.describeKeyPhrasesDetectionJob(req);

            if (res.describeKeyPhrasesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describePiiEntitiesDetectionJob

Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribePiiEntitiesDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribePiiEntitiesDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribePiiEntitiesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribePiiEntitiesDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribePiiEntitiesDetectionJobRequest req = new DescribePiiEntitiesDetectionJobRequest(                new DescribePiiEntitiesDetectionJobRequest("quae");, DescribePiiEntitiesDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_PII_ENTITIES_DETECTION_JOB) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
            }};            

            DescribePiiEntitiesDetectionJobResponse res = sdk.sdk.describePiiEntitiesDetectionJob(req);

            if (res.describePiiEntitiesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResourcePolicy

Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResourcePolicyRequest;
import org.openapis.openapi.models.operations.DescribeResourcePolicyResponse;
import org.openapis.openapi.models.operations.DescribeResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResourcePolicyRequest req = new DescribeResourcePolicyRequest(                new DescribeResourcePolicyRequest("ipsum");, DescribeResourcePolicyXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "consectetur";
                xAmzDate = "vero";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "hic";
            }};            

            DescribeResourcePolicyResponse res = sdk.sdk.describeResourcePolicy(req);

            if (res.describeResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSentimentDetectionJob

Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSentimentDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribeSentimentDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribeSentimentDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSentimentDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSentimentDetectionJobRequest req = new DescribeSentimentDetectionJobRequest(                new DescribeSentimentDetectionJobRequest("quod");, DescribeSentimentDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_SENTIMENT_DETECTION_JOB) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "similique";
                xAmzCredential = "facilis";
                xAmzDate = "vero";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "quibusdam";
            }};            

            DescribeSentimentDetectionJobResponse res = sdk.sdk.describeSentimentDetectionJob(req);

            if (res.describeSentimentDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTargetedSentimentDetectionJob

Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTargetedSentimentDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribeTargetedSentimentDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribeTargetedSentimentDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTargetedSentimentDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTargetedSentimentDetectionJobRequest req = new DescribeTargetedSentimentDetectionJobRequest(                new DescribeTargetedSentimentDetectionJobRequest("sequi");, DescribeTargetedSentimentDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
            }};            

            DescribeTargetedSentimentDetectionJobResponse res = sdk.sdk.describeTargetedSentimentDetectionJob(req);

            if (res.describeTargetedSentimentDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTopicsDetectionJob

Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTopicsDetectionJobRequest;
import org.openapis.openapi.models.operations.DescribeTopicsDetectionJobResponse;
import org.openapis.openapi.models.operations.DescribeTopicsDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTopicsDetectionJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTopicsDetectionJobRequest req = new DescribeTopicsDetectionJobRequest(                new DescribeTopicsDetectionJobRequest("maiores");, DescribeTopicsDetectionJobXAmzTargetEnum.COMPREHEND20171127_DESCRIBE_TOPICS_DETECTION_JOB) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeTopicsDetectionJobResponse res = sdk.sdk.describeTopicsDetectionJob(req);

            if (res.describeTopicsDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectDominantLanguage

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectDominantLanguageRequest;
import org.openapis.openapi.models.operations.DetectDominantLanguageResponse;
import org.openapis.openapi.models.operations.DetectDominantLanguageXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectDominantLanguageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectDominantLanguageRequest req = new DetectDominantLanguageRequest(                new DetectDominantLanguageRequest("ea");, DetectDominantLanguageXAmzTargetEnum.COMPREHEND20171127_DETECT_DOMINANT_LANGUAGE) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "vel";
                xAmzCredential = "possimus";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "laudantium";
            }};            

            DetectDominantLanguageResponse res = sdk.sdk.detectDominantLanguage(req);

            if (res.detectDominantLanguageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectEntities

<p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectEntitiesRequest;
import org.openapis.openapi.models.operations.DetectEntitiesResponse;
import org.openapis.openapi.models.operations.DetectEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectEntitiesRequest;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectEntitiesRequest req = new DetectEntitiesRequest(                new DetectEntitiesRequest() {{
                                bytes = "dolor";
                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_ANALYZE_DOCUMENT) {{
                                    documentReadMode = DocumentReadModeEnum.SERVICE_DEFAULT;
                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                    }};
                                }};;
                                endpointArn = "voluptatibus";
                                languageCode = LanguageCodeEnum.IT;
                                text = "sapiente";
                            }};, DetectEntitiesXAmzTargetEnum.COMPREHEND20171127_DETECT_ENTITIES) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ea";
                xAmzDate = "impedit";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "aliquid";
            }};            

            DetectEntitiesResponse res = sdk.sdk.detectEntities(req);

            if (res.detectEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectKeyPhrases

Detects the key noun phrases found in the text. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectKeyPhrasesRequest;
import org.openapis.openapi.models.operations.DetectKeyPhrasesResponse;
import org.openapis.openapi.models.operations.DetectKeyPhrasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectKeyPhrasesRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectKeyPhrasesRequest req = new DetectKeyPhrasesRequest(                new DetectKeyPhrasesRequest(LanguageCodeEnum.DE, "ea");, DetectKeyPhrasesXAmzTargetEnum.COMPREHEND20171127_DETECT_KEY_PHRASES) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "recusandae";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "minima";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "a";
            }};            

            DetectKeyPhrasesResponse res = sdk.sdk.detectKeyPhrases(req);

            if (res.detectKeyPhrasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectPiiEntities

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectPiiEntitiesRequest;
import org.openapis.openapi.models.operations.DetectPiiEntitiesResponse;
import org.openapis.openapi.models.operations.DetectPiiEntitiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectPiiEntitiesRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectPiiEntitiesRequest req = new DetectPiiEntitiesRequest(                new DetectPiiEntitiesRequest(LanguageCodeEnum.EN, "aut");, DetectPiiEntitiesXAmzTargetEnum.COMPREHEND20171127_DETECT_PII_ENTITIES) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aliquam";
                xAmzDate = "fugit";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "non";
            }};            

            DetectPiiEntitiesResponse res = sdk.sdk.detectPiiEntities(req);

            if (res.detectPiiEntitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectSentiment

Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectSentimentRequest;
import org.openapis.openapi.models.operations.DetectSentimentResponse;
import org.openapis.openapi.models.operations.DetectSentimentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectSentimentRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectSentimentRequest req = new DetectSentimentRequest(                new DetectSentimentRequest(LanguageCodeEnum.JA, "laborum");, DetectSentimentXAmzTargetEnum.COMPREHEND20171127_DETECT_SENTIMENT) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "velit";
                xAmzCredential = "eum";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "assumenda";
            }};            

            DetectSentimentResponse res = sdk.sdk.detectSentiment(req);

            if (res.detectSentimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectSyntax

Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectSyntaxRequest;
import org.openapis.openapi.models.operations.DetectSyntaxResponse;
import org.openapis.openapi.models.operations.DetectSyntaxXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectSyntaxRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyntaxLanguageCodeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectSyntaxRequest req = new DetectSyntaxRequest(                new DetectSyntaxRequest(SyntaxLanguageCodeEnum.FR, "libero");, DetectSyntaxXAmzTargetEnum.COMPREHEND20171127_DETECT_SYNTAX) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "numquam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "provident";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "molestiae";
            }};            

            DetectSyntaxResponse res = sdk.sdk.detectSyntax(req);

            if (res.detectSyntaxResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectTargetedSentiment

<p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectTargetedSentimentRequest;
import org.openapis.openapi.models.operations.DetectTargetedSentimentResponse;
import org.openapis.openapi.models.operations.DetectTargetedSentimentXAmzTargetEnum;
import org.openapis.openapi.models.shared.DetectTargetedSentimentRequest;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetectTargetedSentimentRequest req = new DetectTargetedSentimentRequest(                new DetectTargetedSentimentRequest(LanguageCodeEnum.PT, "eius");, DetectTargetedSentimentXAmzTargetEnum.COMPREHEND20171127_DETECT_TARGETED_SENTIMENT) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "esse";
                xAmzCredential = "rem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "fugiat";
            }};            

            DetectTargetedSentimentResponse res = sdk.sdk.detectTargetedSentiment(req);

            if (res.detectTargetedSentimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importModel

<p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportModelRequest;
import org.openapis.openapi.models.operations.ImportModelResponse;
import org.openapis.openapi.models.operations.ImportModelXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportModelRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportModelRequest req = new ImportModelRequest(                new ImportModelRequest("eum") {{
                                dataAccessRoleArn = "suscipit";
                                modelKmsKeyId = "assumenda";
                                modelName = "eos";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsa") {{
                                        key = "quisquam";
                                        value = "veritatis";
                                    }}),
                                    add(new Tag("neque") {{
                                        key = "id";
                                        value = "quidem";
                                    }}),
                                    add(new Tag("quo") {{
                                        key = "quo";
                                        value = "illum";
                                    }}),
                                }};
                                versionName = "fuga";
                            }};, ImportModelXAmzTargetEnum.COMPREHEND20171127_IMPORT_MODEL) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
            }};            

            ImportModelResponse res = sdk.sdk.importModel(req);

            if (res.importModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatasets

List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatasetsRequest;
import org.openapis.openapi.models.operations.ListDatasetsResponse;
import org.openapis.openapi.models.operations.ListDatasetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DatasetFilter;
import org.openapis.openapi.models.shared.DatasetStatusEnum;
import org.openapis.openapi.models.shared.DatasetTypeEnum;
import org.openapis.openapi.models.shared.ListDatasetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatasetsRequest req = new ListDatasetsRequest(                new ListDatasetsRequest() {{
                                filter = new DatasetFilter() {{
                                    creationTimeAfter = OffsetDateTime.parse("2022-11-13T06:50:40.250Z");
                                    creationTimeBefore = OffsetDateTime.parse("2022-03-22T14:16:41.787Z");
                                    datasetType = DatasetTypeEnum.TRAIN;
                                    status = DatasetStatusEnum.FAILED;
                                }};;
                                flywheelArn = "aperiam";
                                maxResults = 715179L;
                                nextToken = "quod";
                            }};, ListDatasetsXAmzTargetEnum.COMPREHEND20171127_LIST_DATASETS) {{
                maxResults = "dignissimos";
                nextToken = "inventore";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "totam";
                xAmzCredential = "accusamus";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "commodi";
            }};            

            ListDatasetsResponse res = sdk.sdk.listDatasets(req);

            if (res.listDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocumentClassificationJobs

Gets a list of the documentation classification jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentClassificationJobsRequest;
import org.openapis.openapi.models.operations.ListDocumentClassificationJobsResponse;
import org.openapis.openapi.models.operations.ListDocumentClassificationJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentClassificationJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListDocumentClassificationJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentClassificationJobsRequest req = new ListDocumentClassificationJobsRequest(                new ListDocumentClassificationJobsRequest() {{
                                filter = new DocumentClassificationJobFilter() {{
                                    jobName = "dolores";
                                    jobStatus = JobStatusEnum.FAILED;
                                    submitTimeAfter = OffsetDateTime.parse("2022-12-19T02:13:29.248Z");
                                    submitTimeBefore = OffsetDateTime.parse("2021-09-16T17:01:25.429Z");
                                }};;
                                maxResults = 556429L;
                                nextToken = "praesentium";
                            }};, ListDocumentClassificationJobsXAmzTargetEnum.COMPREHEND20171127_LIST_DOCUMENT_CLASSIFICATION_JOBS) {{
                maxResults = "consequuntur";
                nextToken = "deleniti";
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
            }};            

            ListDocumentClassificationJobsResponse res = sdk.sdk.listDocumentClassificationJobs(req);

            if (res.listDocumentClassificationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocumentClassifierSummaries

Gets a list of summaries of the document classifiers that you have created

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentClassifierSummariesRequest;
import org.openapis.openapi.models.operations.ListDocumentClassifierSummariesResponse;
import org.openapis.openapi.models.operations.ListDocumentClassifierSummariesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDocumentClassifierSummariesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentClassifierSummariesRequest req = new ListDocumentClassifierSummariesRequest(                new ListDocumentClassifierSummariesRequest() {{
                                maxResults = 147014L;
                                nextToken = "sapiente";
                            }};, ListDocumentClassifierSummariesXAmzTargetEnum.COMPREHEND20171127_LIST_DOCUMENT_CLASSIFIER_SUMMARIES) {{
                maxResults = "consequuntur";
                nextToken = "ratione";
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "occaecati";
                xAmzDate = "atque";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "eveniet";
            }};            

            ListDocumentClassifierSummariesResponse res = sdk.sdk.listDocumentClassifierSummaries(req);

            if (res.listDocumentClassifierSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocumentClassifiers

Gets a list of the document classifiers that you have created.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentClassifiersRequest;
import org.openapis.openapi.models.operations.ListDocumentClassifiersResponse;
import org.openapis.openapi.models.operations.ListDocumentClassifiersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentClassifierFilter;
import org.openapis.openapi.models.shared.ListDocumentClassifiersRequest;
import org.openapis.openapi.models.shared.ModelStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentClassifiersRequest req = new ListDocumentClassifiersRequest(                new ListDocumentClassifiersRequest() {{
                                filter = new DocumentClassifierFilter() {{
                                    documentClassifierName = "veritatis";
                                    status = ModelStatusEnum.STOP_REQUESTED;
                                    submitTimeAfter = OffsetDateTime.parse("2020-10-30T00:52:28.005Z");
                                    submitTimeBefore = OffsetDateTime.parse("2021-10-21T01:36:51.257Z");
                                }};;
                                maxResults = 93459L;
                                nextToken = "saepe";
                            }};, ListDocumentClassifiersXAmzTargetEnum.COMPREHEND20171127_LIST_DOCUMENT_CLASSIFIERS) {{
                maxResults = "vel";
                nextToken = "harum";
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "occaecati";
                xAmzDate = "minima";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sit";
            }};            

            ListDocumentClassifiersResponse res = sdk.sdk.listDocumentClassifiers(req);

            if (res.listDocumentClassifiersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDominantLanguageDetectionJobs

Gets a list of the dominant language detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDominantLanguageDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListDominantLanguageDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListDominantLanguageDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DominantLanguageDetectionJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListDominantLanguageDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDominantLanguageDetectionJobsRequest req = new ListDominantLanguageDetectionJobsRequest(                new ListDominantLanguageDetectionJobsRequest() {{
                                filter = new DominantLanguageDetectionJobFilter() {{
                                    jobName = "tempore";
                                    jobStatus = JobStatusEnum.IN_PROGRESS;
                                    submitTimeAfter = OffsetDateTime.parse("2022-07-09T05:02:22.250Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-03-16T07:36:38.247Z");
                                }};;
                                maxResults = 308286L;
                                nextToken = "sapiente";
                            }};, ListDominantLanguageDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_DOMINANT_LANGUAGE_DETECTION_JOBS) {{
                maxResults = "consectetur";
                nextToken = "esse";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "a";
                xAmzDate = "nulla";
                xAmzSecurityToken = "quas";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "quasi";
            }};            

            ListDominantLanguageDetectionJobsResponse res = sdk.sdk.listDominantLanguageDetectionJobs(req);

            if (res.listDominantLanguageDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEndpoints

Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEndpointsRequest;
import org.openapis.openapi.models.operations.ListEndpointsResponse;
import org.openapis.openapi.models.operations.ListEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EndpointFilter;
import org.openapis.openapi.models.shared.EndpointStatusEnum;
import org.openapis.openapi.models.shared.ListEndpointsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEndpointsRequest req = new ListEndpointsRequest(                new ListEndpointsRequest() {{
                                filter = new EndpointFilter() {{
                                    creationTimeAfter = OffsetDateTime.parse("2021-11-06T16:50:22.586Z");
                                    creationTimeBefore = OffsetDateTime.parse("2020-07-16T06:14:24.154Z");
                                    modelArn = "quia";
                                    status = EndpointStatusEnum.UPDATING;
                                }};;
                                maxResults = 992430L;
                                nextToken = "facere";
                            }};, ListEndpointsXAmzTargetEnum.COMPREHEND20171127_LIST_ENDPOINTS) {{
                maxResults = "veritatis";
                nextToken = "consequuntur";
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
            }};            

            ListEndpointsResponse res = sdk.sdk.listEndpoints(req);

            if (res.listEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntitiesDetectionJobs

Gets a list of the entity detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntitiesDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListEntitiesDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListEntitiesDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EntitiesDetectionJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListEntitiesDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntitiesDetectionJobsRequest req = new ListEntitiesDetectionJobsRequest(                new ListEntitiesDetectionJobsRequest() {{
                                filter = new EntitiesDetectionJobFilter() {{
                                    jobName = "in";
                                    jobStatus = JobStatusEnum.IN_PROGRESS;
                                    submitTimeAfter = OffsetDateTime.parse("2021-04-21T04:50:55.832Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-12-07T16:30:09.640Z");
                                }};;
                                maxResults = 306986L;
                                nextToken = "sapiente";
                            }};, ListEntitiesDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_ENTITIES_DETECTION_JOBS) {{
                maxResults = "dicta";
                nextToken = "ullam";
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nisi";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "quibusdam";
            }};            

            ListEntitiesDetectionJobsResponse res = sdk.sdk.listEntitiesDetectionJobs(req);

            if (res.listEntitiesDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntityRecognizerSummaries

Gets a list of summaries for the entity recognizers that you have created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntityRecognizerSummariesRequest;
import org.openapis.openapi.models.operations.ListEntityRecognizerSummariesResponse;
import org.openapis.openapi.models.operations.ListEntityRecognizerSummariesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEntityRecognizerSummariesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntityRecognizerSummariesRequest req = new ListEntityRecognizerSummariesRequest(                new ListEntityRecognizerSummariesRequest() {{
                                maxResults = 536275L;
                                nextToken = "itaque";
                            }};, ListEntityRecognizerSummariesXAmzTargetEnum.COMPREHEND20171127_LIST_ENTITY_RECOGNIZER_SUMMARIES) {{
                maxResults = "dolorum";
                nextToken = "architecto";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            ListEntityRecognizerSummariesResponse res = sdk.sdk.listEntityRecognizerSummaries(req);

            if (res.listEntityRecognizerSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEntityRecognizers

<p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEntityRecognizersRequest;
import org.openapis.openapi.models.operations.ListEntityRecognizersResponse;
import org.openapis.openapi.models.operations.ListEntityRecognizersXAmzTargetEnum;
import org.openapis.openapi.models.shared.EntityRecognizerFilter;
import org.openapis.openapi.models.shared.ListEntityRecognizersRequest;
import org.openapis.openapi.models.shared.ModelStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEntityRecognizersRequest req = new ListEntityRecognizersRequest(                new ListEntityRecognizersRequest() {{
                                filter = new EntityRecognizerFilter() {{
                                    recognizerName = "veritatis";
                                    status = ModelStatusEnum.TRAINING;
                                    submitTimeAfter = OffsetDateTime.parse("2022-05-21T17:17:20.623Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-11-25T18:47:58.319Z");
                                }};;
                                maxResults = 522371L;
                                nextToken = "aut";
                            }};, ListEntityRecognizersXAmzTargetEnum.COMPREHEND20171127_LIST_ENTITY_RECOGNIZERS) {{
                maxResults = "laudantium";
                nextToken = "eum";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ab";
                xAmzCredential = "corrupti";
                xAmzDate = "non";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListEntityRecognizersResponse res = sdk.sdk.listEntityRecognizers(req);

            if (res.listEntityRecognizersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventsDetectionJobs

Gets a list of the events detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventsDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListEventsDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListEventsDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EventsDetectionJobFilter;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListEventsDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventsDetectionJobsRequest req = new ListEventsDetectionJobsRequest(                new ListEventsDetectionJobsRequest() {{
                                filter = new EventsDetectionJobFilter() {{
                                    jobName = "impedit";
                                    jobStatus = JobStatusEnum.SUBMITTED;
                                    submitTimeAfter = OffsetDateTime.parse("2022-12-27T14:33:44.678Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-11-19T20:21:26.456Z");
                                }};;
                                maxResults = 981640L;
                                nextToken = "natus";
                            }};, ListEventsDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_EVENTS_DETECTION_JOBS) {{
                maxResults = "velit";
                nextToken = "voluptatibus";
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "aperiam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellendus";
            }};            

            ListEventsDetectionJobsResponse res = sdk.sdk.listEventsDetectionJobs(req);

            if (res.listEventsDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFlywheelIterationHistory

Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFlywheelIterationHistoryRequest;
import org.openapis.openapi.models.operations.ListFlywheelIterationHistoryResponse;
import org.openapis.openapi.models.operations.ListFlywheelIterationHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.FlywheelIterationFilter;
import org.openapis.openapi.models.shared.ListFlywheelIterationHistoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFlywheelIterationHistoryRequest req = new ListFlywheelIterationHistoryRequest(                new ListFlywheelIterationHistoryRequest("maxime") {{
                                filter = new FlywheelIterationFilter() {{
                                    creationTimeAfter = OffsetDateTime.parse("2022-05-12T09:23:17.883Z");
                                    creationTimeBefore = OffsetDateTime.parse("2021-11-23T22:16:07.257Z");
                                }};;
                                maxResults = 65304L;
                                nextToken = "quaerat";
                            }};, ListFlywheelIterationHistoryXAmzTargetEnum.COMPREHEND20171127_LIST_FLYWHEEL_ITERATION_HISTORY) {{
                maxResults = "porro";
                nextToken = "quod";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "ab";
                xAmzCredential = "adipisci";
                xAmzDate = "fuga";
                xAmzSecurityToken = "id";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "velit";
            }};            

            ListFlywheelIterationHistoryResponse res = sdk.sdk.listFlywheelIterationHistory(req);

            if (res.listFlywheelIterationHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFlywheels

Gets a list of the flywheels that you have created.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFlywheelsRequest;
import org.openapis.openapi.models.operations.ListFlywheelsResponse;
import org.openapis.openapi.models.operations.ListFlywheelsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FlywheelFilter;
import org.openapis.openapi.models.shared.FlywheelStatusEnum;
import org.openapis.openapi.models.shared.ListFlywheelsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFlywheelsRequest req = new ListFlywheelsRequest(                new ListFlywheelsRequest() {{
                                filter = new FlywheelFilter() {{
                                    creationTimeAfter = OffsetDateTime.parse("2021-02-23T09:04:41.843Z");
                                    creationTimeBefore = OffsetDateTime.parse("2021-04-17T14:58:08.915Z");
                                    status = FlywheelStatusEnum.UPDATING;
                                }};;
                                maxResults = 497678L;
                                nextToken = "quos";
                            }};, ListFlywheelsXAmzTargetEnum.COMPREHEND20171127_LIST_FLYWHEELS) {{
                maxResults = "vel";
                nextToken = "labore";
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cum";
                xAmzDate = "commodi";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListFlywheelsResponse res = sdk.sdk.listFlywheels(req);

            if (res.listFlywheelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listKeyPhrasesDetectionJobs

Get a list of key phrase detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListKeyPhrasesDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListKeyPhrasesDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListKeyPhrasesDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.KeyPhrasesDetectionJobFilter;
import org.openapis.openapi.models.shared.ListKeyPhrasesDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListKeyPhrasesDetectionJobsRequest req = new ListKeyPhrasesDetectionJobsRequest(                new ListKeyPhrasesDetectionJobsRequest() {{
                                filter = new KeyPhrasesDetectionJobFilter() {{
                                    jobName = "nemo";
                                    jobStatus = JobStatusEnum.STOPPED;
                                    submitTimeAfter = OffsetDateTime.parse("2022-12-15T04:58:32.488Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-07-15T04:22:29.679Z");
                                }};;
                                maxResults = 449083L;
                                nextToken = "exercitationem";
                            }};, ListKeyPhrasesDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_KEY_PHRASES_DETECTION_JOBS) {{
                maxResults = "earum";
                nextToken = "facere";
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "suscipit";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            ListKeyPhrasesDetectionJobsResponse res = sdk.sdk.listKeyPhrasesDetectionJobs(req);

            if (res.listKeyPhrasesDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPiiEntitiesDetectionJobs

Gets a list of the PII entity detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPiiEntitiesDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListPiiEntitiesDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListPiiEntitiesDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListPiiEntitiesDetectionJobsRequest;
import org.openapis.openapi.models.shared.PiiEntitiesDetectionJobFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPiiEntitiesDetectionJobsRequest req = new ListPiiEntitiesDetectionJobsRequest(                new ListPiiEntitiesDetectionJobsRequest() {{
                                filter = new PiiEntitiesDetectionJobFilter() {{
                                    jobName = "sunt";
                                    jobStatus = JobStatusEnum.STOPPED;
                                    submitTimeAfter = OffsetDateTime.parse("2022-10-01T23:04:48.771Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-11-23T08:15:42.493Z");
                                }};;
                                maxResults = 489509L;
                                nextToken = "a";
                            }};, ListPiiEntitiesDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_PII_ENTITIES_DETECTION_JOBS) {{
                maxResults = "debitis";
                nextToken = "consectetur";
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "harum";
                xAmzCredential = "laboriosam";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "vitae";
            }};            

            ListPiiEntitiesDetectionJobsResponse res = sdk.sdk.listPiiEntitiesDetectionJobs(req);

            if (res.listPiiEntitiesDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSentimentDetectionJobs

Gets a list of sentiment detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSentimentDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListSentimentDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListSentimentDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListSentimentDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SentimentDetectionJobFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSentimentDetectionJobsRequest req = new ListSentimentDetectionJobsRequest(                new ListSentimentDetectionJobsRequest() {{
                                filter = new SentimentDetectionJobFilter() {{
                                    jobName = "similique";
                                    jobStatus = JobStatusEnum.IN_PROGRESS;
                                    submitTimeAfter = OffsetDateTime.parse("2022-08-15T15:27:41.112Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-08-17T09:09:54.947Z");
                                }};;
                                maxResults = 324405L;
                                nextToken = "nobis";
                            }};, ListSentimentDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_SENTIMENT_DETECTION_JOBS) {{
                maxResults = "dolorum";
                nextToken = "adipisci";
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "blanditiis";
                xAmzDate = "in";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "officiis";
            }};            

            ListSentimentDetectionJobsResponse res = sdk.sdk.listSentimentDetectionJobs(req);

            if (res.listSentimentDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags associated with a given Amazon Comprehend resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("ullam");, ListTagsForResourceXAmzTargetEnum.COMPREHEND20171127_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "cum";
                xAmzCredential = "blanditiis";
                xAmzDate = "quas";
                xAmzSecurityToken = "hic";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "culpa";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTargetedSentimentDetectionJobs

Gets a list of targeted sentiment detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTargetedSentimentDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListTargetedSentimentDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListTargetedSentimentDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListTargetedSentimentDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetedSentimentDetectionJobFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTargetedSentimentDetectionJobsRequest req = new ListTargetedSentimentDetectionJobsRequest(                new ListTargetedSentimentDetectionJobsRequest() {{
                                filter = new TargetedSentimentDetectionJobFilter() {{
                                    jobName = "pariatur";
                                    jobStatus = JobStatusEnum.FAILED;
                                    submitTimeAfter = OffsetDateTime.parse("2021-12-15T01:59:29.520Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-12-05T00:59:14.180Z");
                                }};;
                                maxResults = 699575L;
                                nextToken = "sed";
                            }};, ListTargetedSentimentDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_TARGETED_SENTIMENT_DETECTION_JOBS) {{
                maxResults = "reiciendis";
                nextToken = "explicabo";
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "voluptate";
                xAmzDate = "expedita";
                xAmzSecurityToken = "ab";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolore";
            }};            

            ListTargetedSentimentDetectionJobsResponse res = sdk.sdk.listTargetedSentimentDetectionJobs(req);

            if (res.listTargetedSentimentDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTopicsDetectionJobs

Gets a list of the topic detection jobs that you have submitted.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTopicsDetectionJobsRequest;
import org.openapis.openapi.models.operations.ListTopicsDetectionJobsResponse;
import org.openapis.openapi.models.operations.ListTopicsDetectionJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.JobStatusEnum;
import org.openapis.openapi.models.shared.ListTopicsDetectionJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TopicsDetectionJobFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTopicsDetectionJobsRequest req = new ListTopicsDetectionJobsRequest(                new ListTopicsDetectionJobsRequest() {{
                                filter = new TopicsDetectionJobFilter() {{
                                    jobName = "sed";
                                    jobStatus = JobStatusEnum.COMPLETED;
                                    submitTimeAfter = OffsetDateTime.parse("2022-04-21T22:21:50.112Z");
                                    submitTimeBefore = OffsetDateTime.parse("2022-08-15T21:51:46.128Z");
                                }};;
                                maxResults = 604118L;
                                nextToken = "architecto";
                            }};, ListTopicsDetectionJobsXAmzTargetEnum.COMPREHEND20171127_LIST_TOPICS_DETECTION_JOBS) {{
                maxResults = "suscipit";
                nextToken = "sapiente";
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "illo";
                xAmzCredential = "reiciendis";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "incidunt";
            }};            

            ListTopicsDetectionJobsResponse res = sdk.sdk.listTopicsDetectionJobs(req);

            if (res.listTopicsDetectionJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.operations.PutResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequest("provident", "eius") {{
                                policyRevisionId = "necessitatibus";
                            }};, PutResourcePolicyXAmzTargetEnum.COMPREHEND20171127_PUT_RESOURCE_POLICY) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "ea";
                xAmzCredential = "occaecati";
                xAmzDate = "quos";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "tempora";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDocumentClassificationJob

Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDocumentClassificationJobRequest;
import org.openapis.openapi.models.operations.StartDocumentClassificationJobResponse;
import org.openapis.openapi.models.operations.StartDocumentClassificationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDocumentClassificationJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDocumentClassificationJobRequest req = new StartDocumentClassificationJobRequest(                new StartDocumentClassificationJobRequest("reiciendis",                 new InputDataConfig("ex") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                                                    documentReadMode = DocumentReadModeEnum.SERVICE_DEFAULT;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_FILE;
                                            }};,                 new OutputDataConfig("debitis") {{
                                                kmsKeyId = "rem";
                                            }};) {{
                                clientRequestToken = "sit";
                                documentClassifierArn = "nobis";
                                flywheelArn = "error";
                                jobName = "veniam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nulla") {{
                                        key = "recusandae";
                                        value = "reiciendis";
                                    }}),
                                    add(new Tag("saepe") {{
                                        key = "magni";
                                        value = "aperiam";
                                    }}),
                                }};
                                volumeKmsKeyId = "numquam";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("in"),
                                                    add("officiis"),
                                                }},                 new String[]{{
                                                    add("laudantium"),
                                                }});;
                            }};, StartDocumentClassificationJobXAmzTargetEnum.COMPREHEND20171127_START_DOCUMENT_CLASSIFICATION_JOB) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "cum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "error";
            }};            

            StartDocumentClassificationJobResponse res = sdk.sdk.startDocumentClassificationJob(req);

            if (res.startDocumentClassificationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDominantLanguageDetectionJob

Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDominantLanguageDetectionJobRequest;
import org.openapis.openapi.models.operations.StartDominantLanguageDetectionJobResponse;
import org.openapis.openapi.models.operations.StartDominantLanguageDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartDominantLanguageDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDominantLanguageDetectionJobRequest req = new StartDominantLanguageDetectionJobRequest(                new StartDominantLanguageDetectionJobRequest("expedita",                 new InputDataConfig("debitis") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                                                    documentReadMode = DocumentReadModeEnum.FORCE_DOCUMENT_READ_ACTION;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_LINE;
                                            }};,                 new OutputDataConfig("accusamus") {{
                                                kmsKeyId = "tempora";
                                            }};) {{
                                clientRequestToken = "atque";
                                jobName = "fugit";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("culpa") {{
                                        key = "fugiat";
                                        value = "voluptatem";
                                    }}),
                                    add(new Tag("consequatur") {{
                                        key = "expedita";
                                        value = "magnam";
                                    }}),
                                }};
                                volumeKmsKeyId = "esse";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("sit"),
                                                    add("voluptatum"),
                                                }},                 new String[]{{
                                                    add("repudiandae"),
                                                    add("corporis"),
                                                    add("et"),
                                                }});;
                            }};, StartDominantLanguageDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_DOMINANT_LANGUAGE_DETECTION_JOB) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sed";
                xAmzDate = "sit";
                xAmzSecurityToken = "vel";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "saepe";
            }};            

            StartDominantLanguageDetectionJobResponse res = sdk.sdk.startDominantLanguageDetectionJob(req);

            if (res.startDominantLanguageDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startEntitiesDetectionJob

<p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartEntitiesDetectionJobRequest;
import org.openapis.openapi.models.operations.StartEntitiesDetectionJobResponse;
import org.openapis.openapi.models.operations.StartEntitiesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartEntitiesDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartEntitiesDetectionJobRequest req = new StartEntitiesDetectionJobRequest(                new StartEntitiesDetectionJobRequest("consequatur",                 new InputDataConfig("incidunt") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_ANALYZE_DOCUMENT) {{
                                                    documentReadMode = DocumentReadModeEnum.SERVICE_DEFAULT;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_FILE;
                                            }};, LanguageCodeEnum.JA,                 new OutputDataConfig("atque") {{
                                                kmsKeyId = "laborum";
                                            }};) {{
                                clientRequestToken = "nam";
                                entityRecognizerArn = "tenetur";
                                flywheelArn = "laboriosam";
                                jobName = "alias";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("unde") {{
                                        key = "deserunt";
                                        value = "voluptate";
                                    }}),
                                }};
                                volumeKmsKeyId = "reiciendis";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("repellendus"),
                                                    add("delectus"),
                                                    add("voluptates"),
                                                }},                 new String[]{{
                                                    add("est"),
                                                }});;
                            }};, StartEntitiesDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_ENTITIES_DETECTION_JOB) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "facere";
                xAmzDate = "fuga";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "veniam";
            }};            

            StartEntitiesDetectionJobResponse res = sdk.sdk.startEntitiesDetectionJob(req);

            if (res.startEntitiesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startEventsDetectionJob

Starts an asynchronous event detection job for a collection of documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartEventsDetectionJobRequest;
import org.openapis.openapi.models.operations.StartEventsDetectionJobResponse;
import org.openapis.openapi.models.operations.StartEventsDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartEventsDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartEventsDetectionJobRequest req = new StartEventsDetectionJobRequest(                new StartEventsDetectionJobRequest("quisquam",                 new InputDataConfig("repudiandae") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                                                    documentReadMode = DocumentReadModeEnum.FORCE_DOCUMENT_READ_ACTION;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_FILE;
                                            }};, LanguageCodeEnum.JA,                 new OutputDataConfig("maxime") {{
                                                kmsKeyId = "et";
                                            }};,                 new String[]{{
                                                add("amet"),
                                                add("assumenda"),
                                            }}) {{
                                clientRequestToken = "ea";
                                jobName = "atque";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("accusamus") {{
                                        key = "officiis";
                                        value = "officiis";
                                    }}),
                                    add(new Tag("aspernatur") {{
                                        key = "natus";
                                        value = "minima";
                                    }}),
                                    add(new Tag("corrupti") {{
                                        key = "ex";
                                        value = "maiores";
                                    }}),
                                }};
                            }};, StartEventsDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_EVENTS_DETECTION_JOB) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "error";
                xAmzCredential = "blanditiis";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "atque";
            }};            

            StartEventsDetectionJobResponse res = sdk.sdk.startEventsDetectionJob(req);

            if (res.startEventsDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFlywheelIteration

Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFlywheelIterationRequest;
import org.openapis.openapi.models.operations.StartFlywheelIterationResponse;
import org.openapis.openapi.models.operations.StartFlywheelIterationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartFlywheelIterationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFlywheelIterationRequest req = new StartFlywheelIterationRequest(                new StartFlywheelIterationRequest("recusandae") {{
                                clientRequestToken = "dolorum";
                            }};, StartFlywheelIterationXAmzTargetEnum.COMPREHEND20171127_START_FLYWHEEL_ITERATION) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "labore";
                xAmzCredential = "reiciendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "accusantium";
            }};            

            StartFlywheelIterationResponse res = sdk.sdk.startFlywheelIteration(req);

            if (res.startFlywheelIterationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startKeyPhrasesDetectionJob

Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartKeyPhrasesDetectionJobRequest;
import org.openapis.openapi.models.operations.StartKeyPhrasesDetectionJobResponse;
import org.openapis.openapi.models.operations.StartKeyPhrasesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartKeyPhrasesDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartKeyPhrasesDetectionJobRequest req = new StartKeyPhrasesDetectionJobRequest(                new StartKeyPhrasesDetectionJobRequest("dolores",                 new InputDataConfig("enim") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                                                    documentReadMode = DocumentReadModeEnum.SERVICE_DEFAULT;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_LINE;
                                            }};, LanguageCodeEnum.ZH,                 new OutputDataConfig("perspiciatis") {{
                                                kmsKeyId = "in";
                                            }};) {{
                                clientRequestToken = "adipisci";
                                jobName = "eveniet";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("id") {{
                                        key = "consequuntur";
                                        value = "fugit";
                                    }}),
                                    add(new Tag("error") {{
                                        key = "quis";
                                        value = "reprehenderit";
                                    }}),
                                    add(new Tag("quidem") {{
                                        key = "illo";
                                        value = "corporis";
                                    }}),
                                }};
                                volumeKmsKeyId = "eveniet";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("vero"),
                                                }},                 new String[]{{
                                                    add("iure"),
                                                }});;
                            }};, StartKeyPhrasesDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_KEY_PHRASES_DETECTION_JOB) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "totam";
                xAmzCredential = "quae";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cum";
            }};            

            StartKeyPhrasesDetectionJobResponse res = sdk.sdk.startKeyPhrasesDetectionJob(req);

            if (res.startKeyPhrasesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startPiiEntitiesDetectionJob

Starts an asynchronous PII entity detection job for a collection of documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartPiiEntitiesDetectionJobRequest;
import org.openapis.openapi.models.operations.StartPiiEntitiesDetectionJobResponse;
import org.openapis.openapi.models.operations.StartPiiEntitiesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.PiiEntitiesDetectionMaskModeEnum;
import org.openapis.openapi.models.shared.PiiEntitiesDetectionModeEnum;
import org.openapis.openapi.models.shared.PiiEntityTypeEnum;
import org.openapis.openapi.models.shared.RedactionConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartPiiEntitiesDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartPiiEntitiesDetectionJobRequest req = new StartPiiEntitiesDetectionJobRequest(                new StartPiiEntitiesDetectionJobRequest("necessitatibus",                 new InputDataConfig("ratione") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_ANALYZE_DOCUMENT) {{
                                                    documentReadMode = DocumentReadModeEnum.FORCE_DOCUMENT_READ_ACTION;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_LINE;
                                            }};, LanguageCodeEnum.EN, PiiEntitiesDetectionModeEnum.ONLY_REDACTION,                 new OutputDataConfig("perspiciatis") {{
                                                kmsKeyId = "nihil";
                                            }};) {{
                                clientRequestToken = "mollitia";
                                jobName = "voluptas";
                                redactionConfig = new RedactionConfig() {{
                                    maskCharacter = "alias";
                                    maskMode = PiiEntitiesDetectionMaskModeEnum.REPLACE_WITH_PII_ENTITY_TYPE;
                                    piiEntityTypes = new org.openapis.openapi.models.shared.PiiEntityTypeEnum[]{{
                                        add(PiiEntityTypeEnum.EMAIL),
                                        add(PiiEntityTypeEnum.VEHICLE_IDENTIFICATION_NUMBER),
                                        add(PiiEntityTypeEnum.PASSPORT_NUMBER),
                                        add(PiiEntityTypeEnum.SSN),
                                    }};
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("recusandae") {{
                                        key = "nesciunt";
                                        value = "quae";
                                    }}),
                                    add(new Tag("molestiae") {{
                                        key = "omnis";
                                        value = "quaerat";
                                    }}),
                                    add(new Tag("culpa") {{
                                        key = "ex";
                                        value = "ut";
                                    }}),
                                }};
                            }};, StartPiiEntitiesDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_PII_ENTITIES_DETECTION_JOB) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "esse";
            }};            

            StartPiiEntitiesDetectionJobResponse res = sdk.sdk.startPiiEntitiesDetectionJob(req);

            if (res.startPiiEntitiesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSentimentDetectionJob

Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSentimentDetectionJobRequest;
import org.openapis.openapi.models.operations.StartSentimentDetectionJobResponse;
import org.openapis.openapi.models.operations.StartSentimentDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSentimentDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSentimentDetectionJobRequest req = new StartSentimentDetectionJobRequest(                new StartSentimentDetectionJobRequest("quis",                 new InputDataConfig("eum") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_ANALYZE_DOCUMENT) {{
                                                    documentReadMode = DocumentReadModeEnum.FORCE_DOCUMENT_READ_ACTION;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_FILE;
                                            }};, LanguageCodeEnum.HI,                 new OutputDataConfig("nostrum") {{
                                                kmsKeyId = "mollitia";
                                            }};) {{
                                clientRequestToken = "provident";
                                jobName = "possimus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("accusantium") {{
                                        key = "ex";
                                        value = "aliquid";
                                    }}),
                                    add(new Tag("ullam") {{
                                        key = "repellat";
                                        value = "doloribus";
                                    }}),
                                    add(new Tag("earum") {{
                                        key = "in";
                                        value = "nam";
                                    }}),
                                }};
                                volumeKmsKeyId = "officia";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("placeat"),
                                                    add("modi"),
                                                    add("voluptatibus"),
                                                }},                 new String[]{{
                                                    add("officiis"),
                                                    add("sapiente"),
                                                    add("cumque"),
                                                }});;
                            }};, StartSentimentDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_SENTIMENT_DETECTION_JOB) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "tempora";
                xAmzDate = "quis";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "cumque";
            }};            

            StartSentimentDetectionJobResponse res = sdk.sdk.startSentimentDetectionJob(req);

            if (res.startSentimentDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTargetedSentimentDetectionJob

Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTargetedSentimentDetectionJobRequest;
import org.openapis.openapi.models.operations.StartTargetedSentimentDetectionJobResponse;
import org.openapis.openapi.models.operations.StartTargetedSentimentDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.LanguageCodeEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartTargetedSentimentDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTargetedSentimentDetectionJobRequest req = new StartTargetedSentimentDetectionJobRequest(                new StartTargetedSentimentDetectionJobRequest("perferendis",                 new InputDataConfig("velit") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                                                    documentReadMode = DocumentReadModeEnum.SERVICE_DEFAULT;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_LINE;
                                            }};, LanguageCodeEnum.FR,                 new OutputDataConfig("sapiente") {{
                                                kmsKeyId = "eum";
                                            }};) {{
                                clientRequestToken = "dicta";
                                jobName = "minima";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("earum") {{
                                        key = "cupiditate";
                                        value = "provident";
                                    }}),
                                }};
                                volumeKmsKeyId = "soluta";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("illum"),
                                                    add("eaque"),
                                                    add("earum"),
                                                    add("perspiciatis"),
                                                }},                 new String[]{{
                                                    add("debitis"),
                                                    add("aliquid"),
                                                    add("porro"),
                                                    add("suscipit"),
                                                }});;
                            }};, StartTargetedSentimentDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_TARGETED_SENTIMENT_DETECTION_JOB) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "cumque";
                xAmzDate = "fuga";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            StartTargetedSentimentDetectionJobResponse res = sdk.sdk.startTargetedSentimentDetectionJob(req);

            if (res.startTargetedSentimentDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startTopicsDetectionJob

Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartTopicsDetectionJobRequest;
import org.openapis.openapi.models.operations.StartTopicsDetectionJobResponse;
import org.openapis.openapi.models.operations.StartTopicsDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DocumentReadActionEnum;
import org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum;
import org.openapis.openapi.models.shared.DocumentReadModeEnum;
import org.openapis.openapi.models.shared.DocumentReaderConfig;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.InputFormatEnum;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartTopicsDetectionJobRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartTopicsDetectionJobRequest req = new StartTopicsDetectionJobRequest(                new StartTopicsDetectionJobRequest("consequatur",                 new InputDataConfig("quasi") {{
                                                documentReaderConfig = new DocumentReaderConfig(DocumentReadActionEnum.TEXTRACT_DETECT_DOCUMENT_TEXT) {{
                                                    documentReadMode = DocumentReadModeEnum.SERVICE_DEFAULT;
                                                    featureTypes = new org.openapis.openapi.models.shared.DocumentReadFeatureTypesEnum[]{{
                                                        add(DocumentReadFeatureTypesEnum.FORMS),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                        add(DocumentReadFeatureTypesEnum.TABLES),
                                                    }};
                                                }};;
                                                inputFormat = InputFormatEnum.ONE_DOC_PER_FILE;
                                            }};,                 new OutputDataConfig("magni") {{
                                                kmsKeyId = "doloribus";
                                            }};) {{
                                clientRequestToken = "nulla";
                                jobName = "necessitatibus";
                                numberOfTopics = 58534L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dicta") {{
                                        key = "nihil";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag("praesentium") {{
                                        key = "iusto";
                                        value = "esse";
                                    }}),
                                }};
                                volumeKmsKeyId = "maiores";
                                vpcConfig = new VpcConfig(                new String[]{{
                                                    add("vel"),
                                                    add("architecto"),
                                                    add("fugiat"),
                                                    add("doloremque"),
                                                }},                 new String[]{{
                                                    add("odio"),
                                                }});;
                            }};, StartTopicsDetectionJobXAmzTargetEnum.COMPREHEND20171127_START_TOPICS_DETECTION_JOB) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ex";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "laborum";
            }};            

            StartTopicsDetectionJobResponse res = sdk.sdk.startTopicsDetectionJob(req);

            if (res.startTopicsDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopDominantLanguageDetectionJob

<p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopDominantLanguageDetectionJobRequest;
import org.openapis.openapi.models.operations.StopDominantLanguageDetectionJobResponse;
import org.openapis.openapi.models.operations.StopDominantLanguageDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopDominantLanguageDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopDominantLanguageDetectionJobRequest req = new StopDominantLanguageDetectionJobRequest(                new StopDominantLanguageDetectionJobRequest("nostrum");, StopDominantLanguageDetectionJobXAmzTargetEnum.COMPREHEND20171127_STOP_DOMINANT_LANGUAGE_DETECTION_JOB) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "aliquid";
                xAmzDate = "officia";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "perferendis";
            }};            

            StopDominantLanguageDetectionJobResponse res = sdk.sdk.stopDominantLanguageDetectionJob(req);

            if (res.stopDominantLanguageDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopEntitiesDetectionJob

<p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopEntitiesDetectionJobRequest;
import org.openapis.openapi.models.operations.StopEntitiesDetectionJobResponse;
import org.openapis.openapi.models.operations.StopEntitiesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopEntitiesDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopEntitiesDetectionJobRequest req = new StopEntitiesDetectionJobRequest(                new StopEntitiesDetectionJobRequest("voluptas");, StopEntitiesDetectionJobXAmzTargetEnum.COMPREHEND20171127_STOP_ENTITIES_DETECTION_JOB) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "id";
                xAmzCredential = "ab";
                xAmzDate = "error";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "mollitia";
            }};            

            StopEntitiesDetectionJobResponse res = sdk.sdk.stopEntitiesDetectionJob(req);

            if (res.stopEntitiesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopEventsDetectionJob

Stops an events detection job in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopEventsDetectionJobRequest;
import org.openapis.openapi.models.operations.StopEventsDetectionJobResponse;
import org.openapis.openapi.models.operations.StopEventsDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopEventsDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopEventsDetectionJobRequest req = new StopEventsDetectionJobRequest(                new StopEventsDetectionJobRequest("libero");, StopEventsDetectionJobXAmzTargetEnum.COMPREHEND20171127_STOP_EVENTS_DETECTION_JOB) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "enim";
                xAmzDate = "vitae";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "quo";
            }};            

            StopEventsDetectionJobResponse res = sdk.sdk.stopEventsDetectionJob(req);

            if (res.stopEventsDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopKeyPhrasesDetectionJob

<p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopKeyPhrasesDetectionJobRequest;
import org.openapis.openapi.models.operations.StopKeyPhrasesDetectionJobResponse;
import org.openapis.openapi.models.operations.StopKeyPhrasesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopKeyPhrasesDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopKeyPhrasesDetectionJobRequest req = new StopKeyPhrasesDetectionJobRequest(                new StopKeyPhrasesDetectionJobRequest("ut");, StopKeyPhrasesDetectionJobXAmzTargetEnum.COMPREHEND20171127_STOP_KEY_PHRASES_DETECTION_JOB) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "voluptatem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "cum";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "beatae";
            }};            

            StopKeyPhrasesDetectionJobResponse res = sdk.sdk.stopKeyPhrasesDetectionJob(req);

            if (res.stopKeyPhrasesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPiiEntitiesDetectionJob

Stops a PII entities detection job in progress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPiiEntitiesDetectionJobRequest;
import org.openapis.openapi.models.operations.StopPiiEntitiesDetectionJobResponse;
import org.openapis.openapi.models.operations.StopPiiEntitiesDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopPiiEntitiesDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopPiiEntitiesDetectionJobRequest req = new StopPiiEntitiesDetectionJobRequest(                new StopPiiEntitiesDetectionJobRequest("omnis");, StopPiiEntitiesDetectionJobXAmzTargetEnum.COMPREHEND20171127_STOP_PII_ENTITIES_DETECTION_JOB) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "est";
                xAmzDate = "culpa";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "officiis";
            }};            

            StopPiiEntitiesDetectionJobResponse res = sdk.sdk.stopPiiEntitiesDetectionJob(req);

            if (res.stopPiiEntitiesDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopSentimentDetectionJob

<p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopSentimentDetectionJobRequest;
import org.openapis.openapi.models.operations.StopSentimentDetectionJobResponse;
import org.openapis.openapi.models.operations.StopSentimentDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopSentimentDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopSentimentDetectionJobRequest req = new StopSentimentDetectionJobRequest(                new StopSentimentDetectionJobRequest("fuga");, StopSentimentDetectionJobXAmzTargetEnum.COMPREHEND20171127_STOP_SENTIMENT_DETECTION_JOB) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "voluptatem";
                xAmzDate = "alias";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "ex";
            }};            

            StopSentimentDetectionJobResponse res = sdk.sdk.stopSentimentDetectionJob(req);

            if (res.stopSentimentDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTargetedSentimentDetectionJob

<p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTargetedSentimentDetectionJobRequest;
import org.openapis.openapi.models.operations.StopTargetedSentimentDetectionJobResponse;
import org.openapis.openapi.models.operations.StopTargetedSentimentDetectionJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopTargetedSentimentDetectionJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopTargetedSentimentDetectionJobRequest req = new StopTargetedSentimentDetectionJobRequest(                new StopTargetedSentimentDetectionJobRequest("rem");, StopTargetedSentimentDetectionJobXAmzTargetEnum.COMPREHEND20171127_STOP_TARGETED_SENTIMENT_DETECTION_JOB) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "asperiores";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "illum";
            }};            

            StopTargetedSentimentDetectionJobResponse res = sdk.sdk.stopTargetedSentimentDetectionJob(req);

            if (res.stopTargetedSentimentDetectionJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTrainingDocumentClassifier

<p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTrainingDocumentClassifierRequest;
import org.openapis.openapi.models.operations.StopTrainingDocumentClassifierResponse;
import org.openapis.openapi.models.operations.StopTrainingDocumentClassifierXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopTrainingDocumentClassifierRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopTrainingDocumentClassifierRequest req = new StopTrainingDocumentClassifierRequest(                new StopTrainingDocumentClassifierRequest("impedit");, StopTrainingDocumentClassifierXAmzTargetEnum.COMPREHEND20171127_STOP_TRAINING_DOCUMENT_CLASSIFIER) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "ipsam";
                xAmzDate = "culpa";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "inventore";
            }};            

            StopTrainingDocumentClassifierResponse res = sdk.sdk.stopTrainingDocumentClassifier(req);

            if (res.stopTrainingDocumentClassifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopTrainingEntityRecognizer

<p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopTrainingEntityRecognizerRequest;
import org.openapis.openapi.models.operations.StopTrainingEntityRecognizerResponse;
import org.openapis.openapi.models.operations.StopTrainingEntityRecognizerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopTrainingEntityRecognizerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopTrainingEntityRecognizerRequest req = new StopTrainingEntityRecognizerRequest(                new StopTrainingEntityRecognizerRequest("veritatis");, StopTrainingEntityRecognizerXAmzTargetEnum.COMPREHEND20171127_STOP_TRAINING_ENTITY_RECOGNIZER) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "consequatur";
                xAmzDate = "architecto";
                xAmzSecurityToken = "sit";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "fugit";
            }};            

            StopTrainingEntityRecognizerResponse res = sdk.sdk.stopTrainingEntityRecognizer(req);

            if (res.stopTrainingEntityRecognizerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("laudantium",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("ipsam") {{
                                                    key = "dolor";
                                                    value = "fugiat";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.COMPREHEND20171127_TAG_RESOURCE) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "quas";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "esse";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a specific tag associated with an Amazon Comprehend resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("sed",                 new String[]{{
                                                add("nesciunt"),
                                                add("expedita"),
                                            }});, UntagResourceXAmzTargetEnum.COMPREHEND20171127_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "voluptatum";
                xAmzDate = "magnam";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "porro";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEndpoint

Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEndpointRequest;
import org.openapis.openapi.models.operations.UpdateEndpointResponse;
import org.openapis.openapi.models.operations.UpdateEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEndpointRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEndpointRequest req = new UpdateEndpointRequest(                new UpdateEndpointRequest("nobis") {{
                                desiredDataAccessRoleArn = "laboriosam";
                                desiredInferenceUnits = 927212L;
                                desiredModelArn = "consequuntur";
                                flywheelArn = "voluptatem";
                            }};, UpdateEndpointXAmzTargetEnum.COMPREHEND20171127_UPDATE_ENDPOINT) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "quasi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "at";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "est";
            }};            

            UpdateEndpointResponse res = sdk.sdk.updateEndpoint(req);

            if (res.updateEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFlywheel

Update the configuration information for an existing flywheel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFlywheelRequest;
import org.openapis.openapi.models.operations.UpdateFlywheelResponse;
import org.openapis.openapi.models.operations.UpdateFlywheelXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDataSecurityConfig;
import org.openapis.openapi.models.shared.UpdateFlywheelRequest;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFlywheelRequest req = new UpdateFlywheelRequest(                new UpdateFlywheelRequest("sequi") {{
                                activeModelArn = "doloribus";
                                dataAccessRoleArn = "repudiandae";
                                dataSecurityConfig = new UpdateDataSecurityConfig() {{
                                    modelKmsKeyId = "optio";
                                    volumeKmsKeyId = "occaecati";
                                    vpcConfig = new VpcConfig(                new String[]{{
                                                        add("voluptate"),
                                                        add("blanditiis"),
                                                    }},                 new String[]{{
                                                        add("voluptas"),
                                                        add("numquam"),
                                                        add("nemo"),
                                                    }});;
                                }};;
                            }};, UpdateFlywheelXAmzTargetEnum.COMPREHEND20171127_UPDATE_FLYWHEEL) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "laudantium";
            }};            

            UpdateFlywheelResponse res = sdk.sdk.updateFlywheel(req);

            if (res.updateFlywheelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
