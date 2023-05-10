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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectDominantLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetectDominantLanguageRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectDominantLanguageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDetectDominantLanguageRequest();
    $request->batchDetectDominantLanguageRequest = new BatchDetectDominantLanguageRequest();
    $request->batchDetectDominantLanguageRequest->textList = [
        'iure',
        'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = BatchDetectDominantLanguageXAmzTargetEnum::COMPREHEND20171127_BATCH_DETECT_DOMINANT_LANGUAGE;

    $response = $sdk->sdk->batchDetectDominantLanguage($request);

    if ($response->batchDetectDominantLanguageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDetectEntities

Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetectEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDetectEntitiesRequest();
    $request->batchDetectEntitiesRequest = new BatchDetectEntitiesRequest();
    $request->batchDetectEntitiesRequest->languageCode = LanguageCodeEnum::KO;
    $request->batchDetectEntitiesRequest->textList = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = BatchDetectEntitiesXAmzTargetEnum::COMPREHEND20171127_BATCH_DETECT_ENTITIES;

    $response = $sdk->sdk->batchDetectEntities($request);

    if ($response->batchDetectEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDetectKeyPhrases

Detects the key noun phrases found in a batch of documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectKeyPhrasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetectKeyPhrasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectKeyPhrasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDetectKeyPhrasesRequest();
    $request->batchDetectKeyPhrasesRequest = new BatchDetectKeyPhrasesRequest();
    $request->batchDetectKeyPhrasesRequest->languageCode = LanguageCodeEnum::IT;
    $request->batchDetectKeyPhrasesRequest->textList = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = BatchDetectKeyPhrasesXAmzTargetEnum::COMPREHEND20171127_BATCH_DETECT_KEY_PHRASES;

    $response = $sdk->sdk->batchDetectKeyPhrases($request);

    if ($response->batchDetectKeyPhrasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDetectSentiment

Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetectSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectSentimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDetectSentimentRequest();
    $request->batchDetectSentimentRequest = new BatchDetectSentimentRequest();
    $request->batchDetectSentimentRequest->languageCode = LanguageCodeEnum::KO;
    $request->batchDetectSentimentRequest->textList = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = BatchDetectSentimentXAmzTargetEnum::COMPREHEND20171127_BATCH_DETECT_SENTIMENT;

    $response = $sdk->sdk->batchDetectSentiment($request);

    if ($response->batchDetectSentimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDetectSyntax

Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectSyntaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetectSyntaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyntaxLanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectSyntaxXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDetectSyntaxRequest();
    $request->batchDetectSyntaxRequest = new BatchDetectSyntaxRequest();
    $request->batchDetectSyntaxRequest->languageCode = SyntaxLanguageCodeEnum::FR;
    $request->batchDetectSyntaxRequest->textList = [
        'modi',
        'qui',
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = BatchDetectSyntaxXAmzTargetEnum::COMPREHEND20171127_BATCH_DETECT_SYNTAX;

    $response = $sdk->sdk->batchDetectSyntax($request);

    if ($response->batchDetectSyntaxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDetectTargetedSentiment

<p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectTargetedSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetectTargetedSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchDetectTargetedSentimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDetectTargetedSentimentRequest();
    $request->batchDetectTargetedSentimentRequest = new BatchDetectTargetedSentimentRequest();
    $request->batchDetectTargetedSentimentRequest->languageCode = LanguageCodeEnum::DE;
    $request->batchDetectTargetedSentimentRequest->textList = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = BatchDetectTargetedSentimentXAmzTargetEnum::COMPREHEND20171127_BATCH_DETECT_TARGETED_SENTIMENT;

    $response = $sdk->sdk->batchDetectTargetedSentiment($request);

    if ($response->batchDetectTargetedSentimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## classifyDocument

<p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClassifyDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyDocumentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyDocumentRequest();
    $request->classifyDocumentRequest = new ClassifyDocumentRequest();
    $request->classifyDocumentRequest->bytes = 'iste';
    $request->classifyDocumentRequest->documentReaderConfig = new DocumentReaderConfig();
    $request->classifyDocumentRequest->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_DETECT_DOCUMENT_TEXT;
    $request->classifyDocumentRequest->documentReaderConfig->documentReadMode = DocumentReadModeEnum::FORCE_DOCUMENT_READ_ACTION;
    $request->classifyDocumentRequest->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::FORMS,
    ];
    $request->classifyDocumentRequest->endpointArn = 'est';
    $request->classifyDocumentRequest->text = 'mollitia';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ClassifyDocumentXAmzTargetEnum::COMPREHEND20171127_CLASSIFY_DOCUMENT;

    $response = $sdk->sdk->classifyDocument($request);

    if ($response->classifyDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## containsPiiEntities

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ContainsPiiEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContainsPiiEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContainsPiiEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContainsPiiEntitiesRequest();
    $request->containsPiiEntitiesRequest = new ContainsPiiEntitiesRequest();
    $request->containsPiiEntitiesRequest->languageCode = LanguageCodeEnum::HI;
    $request->containsPiiEntitiesRequest->text = 'nemo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = ContainsPiiEntitiesXAmzTargetEnum::COMPREHEND20171127_CONTAINS_PII_ENTITIES;

    $response = $sdk->sdk->containsPiiEntities($request);

    if ($response->containsPiiEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataset

Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetInputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatasetAugmentedManifestsListItem;
use \OpenAPI\OpenAPI\Models\Shared\AugmentedManifestsDocumentTypeFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetDocumentClassifierInputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatasetEntityRecognizerInputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DatasetEntityRecognizerAnnotations;
use \OpenAPI\OpenAPI\Models\Shared\DatasetEntityRecognizerDocuments;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetEntityRecognizerEntityList;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatasetRequest();
    $request->createDatasetRequest = new CreateDatasetRequest();
    $request->createDatasetRequest->clientRequestToken = 'architecto';
    $request->createDatasetRequest->datasetName = 'mollitia';
    $request->createDatasetRequest->datasetType = DatasetTypeEnum::TRAIN;
    $request->createDatasetRequest->description = 'culpa';
    $request->createDatasetRequest->flywheelArn = 'consequuntur';
    $request->createDatasetRequest->inputDataConfig = new DatasetInputDataConfig();
    $request->createDatasetRequest->inputDataConfig->augmentedManifests = [
        new DatasetAugmentedManifestsListItem(),
        new DatasetAugmentedManifestsListItem(),
        new DatasetAugmentedManifestsListItem(),
        new DatasetAugmentedManifestsListItem(),
    ];
    $request->createDatasetRequest->inputDataConfig->dataFormat = DatasetDataFormatEnum::AUGMENTED_MANIFEST;
    $request->createDatasetRequest->inputDataConfig->documentClassifierInputDataConfig = new DatasetDocumentClassifierInputDataConfig();
    $request->createDatasetRequest->inputDataConfig->documentClassifierInputDataConfig->labelDelimiter = 'occaecati';
    $request->createDatasetRequest->inputDataConfig->documentClassifierInputDataConfig->s3Uri = 'numquam';
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig = new DatasetEntityRecognizerInputDataConfig();
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig->annotations = new DatasetEntityRecognizerAnnotations();
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig->annotations->s3Uri = 'commodi';
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig->documents = new DatasetEntityRecognizerDocuments();
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig->documents->inputFormat = InputFormatEnum::ONE_DOC_PER_FILE;
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig->documents->s3Uri = 'molestiae';
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig->entityList = new DatasetEntityRecognizerEntityList();
    $request->createDatasetRequest->inputDataConfig->entityRecognizerInputDataConfig->entityList->s3Uri = 'velit';
    $request->createDatasetRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = CreateDatasetXAmzTargetEnum::COMPREHEND20171127_CREATE_DATASET;

    $response = $sdk->sdk->createDataset($request);

    if ($response->createDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDocumentClassifier

Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierInputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\AugmentedManifestsListItem;
use \OpenAPI\OpenAPI\Models\Shared\AugmentedManifestsDocumentTypeFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplitEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierDocumentTypeFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierDocuments;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierOutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDocumentClassifierRequest();
    $request->createDocumentClassifierRequest = new CreateDocumentClassifierRequest();
    $request->createDocumentClassifierRequest->clientRequestToken = 'quo';
    $request->createDocumentClassifierRequest->dataAccessRoleArn = 'sequi';
    $request->createDocumentClassifierRequest->documentClassifierName = 'tenetur';
    $request->createDocumentClassifierRequest->inputDataConfig = new DocumentClassifierInputDataConfig();
    $request->createDocumentClassifierRequest->inputDataConfig->augmentedManifests = [
        new AugmentedManifestsListItem(),
        new AugmentedManifestsListItem(),
    ];
    $request->createDocumentClassifierRequest->inputDataConfig->dataFormat = DocumentClassifierDataFormatEnum::AUGMENTED_MANIFEST;
    $request->createDocumentClassifierRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->createDocumentClassifierRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_ANALYZE_DOCUMENT;
    $request->createDocumentClassifierRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::SERVICE_DEFAULT;
    $request->createDocumentClassifierRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::FORMS,
    ];
    $request->createDocumentClassifierRequest->inputDataConfig->documentType = DocumentClassifierDocumentTypeFormatEnum::SEMI_STRUCTURED_DOCUMENT;
    $request->createDocumentClassifierRequest->inputDataConfig->documents = new DocumentClassifierDocuments();
    $request->createDocumentClassifierRequest->inputDataConfig->documents->s3Uri = 'laborum';
    $request->createDocumentClassifierRequest->inputDataConfig->documents->testS3Uri = 'quasi';
    $request->createDocumentClassifierRequest->inputDataConfig->labelDelimiter = 'reiciendis';
    $request->createDocumentClassifierRequest->inputDataConfig->s3Uri = 'voluptatibus';
    $request->createDocumentClassifierRequest->inputDataConfig->testS3Uri = 'vero';
    $request->createDocumentClassifierRequest->languageCode = LanguageCodeEnum::PT;
    $request->createDocumentClassifierRequest->mode = DocumentClassifierModeEnum::MULTI_LABEL;
    $request->createDocumentClassifierRequest->modelKmsKeyId = 'voluptatibus';
    $request->createDocumentClassifierRequest->modelPolicy = 'ipsa';
    $request->createDocumentClassifierRequest->outputDataConfig = new DocumentClassifierOutputDataConfig();
    $request->createDocumentClassifierRequest->outputDataConfig->flywheelStatsS3Prefix = 'omnis';
    $request->createDocumentClassifierRequest->outputDataConfig->kmsKeyId = 'voluptate';
    $request->createDocumentClassifierRequest->outputDataConfig->s3Uri = 'cum';
    $request->createDocumentClassifierRequest->tags = [
        new Tag(),
    ];
    $request->createDocumentClassifierRequest->versionName = 'doloremque';
    $request->createDocumentClassifierRequest->volumeKmsKeyId = 'reprehenderit';
    $request->createDocumentClassifierRequest->vpcConfig = new VpcConfig();
    $request->createDocumentClassifierRequest->vpcConfig->securityGroupIds = [
        'maiores',
        'dicta',
    ];
    $request->createDocumentClassifierRequest->vpcConfig->subnets = [
        'dolore',
        'iusto',
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = CreateDocumentClassifierXAmzTargetEnum::COMPREHEND20171127_CREATE_DOCUMENT_CLASSIFIER;

    $response = $sdk->sdk->createDocumentClassifier($request);

    if ($response->createDocumentClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEndpoint

Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndpointRequest();
    $request->createEndpointRequest = new CreateEndpointRequest();
    $request->createEndpointRequest->clientRequestToken = 'ipsum';
    $request->createEndpointRequest->dataAccessRoleArn = 'quidem';
    $request->createEndpointRequest->desiredInferenceUnits = 565189;
    $request->createEndpointRequest->endpointName = 'excepturi';
    $request->createEndpointRequest->flywheelArn = 'pariatur';
    $request->createEndpointRequest->modelArn = 'modi';
    $request->createEndpointRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = CreateEndpointXAmzTargetEnum::COMPREHEND20171127_CREATE_ENDPOINT;

    $response = $sdk->sdk->createEndpoint($request);

    if ($response->createEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEntityRecognizer

Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityRecognizerInputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\EntityRecognizerAnnotations;
use \OpenAPI\OpenAPI\Models\Shared\AugmentedManifestsListItem;
use \OpenAPI\OpenAPI\Models\Shared\AugmentedManifestsDocumentTypeFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SplitEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityRecognizerDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityRecognizerDocuments;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityRecognizerEntityList;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesListItem;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateEntityRecognizerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEntityRecognizerRequest();
    $request->createEntityRecognizerRequest = new CreateEntityRecognizerRequest();
    $request->createEntityRecognizerRequest->clientRequestToken = 'incidunt';
    $request->createEntityRecognizerRequest->dataAccessRoleArn = 'enim';
    $request->createEntityRecognizerRequest->inputDataConfig = new EntityRecognizerInputDataConfig();
    $request->createEntityRecognizerRequest->inputDataConfig->annotations = new EntityRecognizerAnnotations();
    $request->createEntityRecognizerRequest->inputDataConfig->annotations->s3Uri = 'consequatur';
    $request->createEntityRecognizerRequest->inputDataConfig->annotations->testS3Uri = 'est';
    $request->createEntityRecognizerRequest->inputDataConfig->augmentedManifests = [
        new AugmentedManifestsListItem(),
        new AugmentedManifestsListItem(),
        new AugmentedManifestsListItem(),
        new AugmentedManifestsListItem(),
    ];
    $request->createEntityRecognizerRequest->inputDataConfig->dataFormat = EntityRecognizerDataFormatEnum::COMPREHEND_CSV;
    $request->createEntityRecognizerRequest->inputDataConfig->documents = new EntityRecognizerDocuments();
    $request->createEntityRecognizerRequest->inputDataConfig->documents->inputFormat = InputFormatEnum::ONE_DOC_PER_LINE;
    $request->createEntityRecognizerRequest->inputDataConfig->documents->s3Uri = 'distinctio';
    $request->createEntityRecognizerRequest->inputDataConfig->documents->testS3Uri = 'quibusdam';
    $request->createEntityRecognizerRequest->inputDataConfig->entityList = new EntityRecognizerEntityList();
    $request->createEntityRecognizerRequest->inputDataConfig->entityList->s3Uri = 'labore';
    $request->createEntityRecognizerRequest->inputDataConfig->entityTypes = [
        new EntityTypesListItem(),
        new EntityTypesListItem(),
    ];
    $request->createEntityRecognizerRequest->languageCode = LanguageCodeEnum::FR;
    $request->createEntityRecognizerRequest->modelKmsKeyId = 'aliquid';
    $request->createEntityRecognizerRequest->modelPolicy = 'cupiditate';
    $request->createEntityRecognizerRequest->recognizerName = 'quos';
    $request->createEntityRecognizerRequest->tags = [
        new Tag(),
    ];
    $request->createEntityRecognizerRequest->versionName = 'magni';
    $request->createEntityRecognizerRequest->volumeKmsKeyId = 'assumenda';
    $request->createEntityRecognizerRequest->vpcConfig = new VpcConfig();
    $request->createEntityRecognizerRequest->vpcConfig->securityGroupIds = [
        'alias',
        'fugit',
    ];
    $request->createEntityRecognizerRequest->vpcConfig->subnets = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = CreateEntityRecognizerXAmzTargetEnum::COMPREHEND20171127_CREATE_ENTITY_RECOGNIZER;

    $response = $sdk->sdk->createEntityRecognizer($request);

    if ($response->createEntityRecognizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFlywheel

<p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Shared\ModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntityRecognitionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EntityTypesListItem;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlywheelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFlywheelRequest();
    $request->createFlywheelRequest = new CreateFlywheelRequest();
    $request->createFlywheelRequest->activeModelArn = 'aliquid';
    $request->createFlywheelRequest->clientRequestToken = 'provident';
    $request->createFlywheelRequest->dataAccessRoleArn = 'necessitatibus';
    $request->createFlywheelRequest->dataLakeS3Uri = 'sint';
    $request->createFlywheelRequest->dataSecurityConfig = new DataSecurityConfig();
    $request->createFlywheelRequest->dataSecurityConfig->dataLakeKmsKeyId = 'officia';
    $request->createFlywheelRequest->dataSecurityConfig->modelKmsKeyId = 'dolor';
    $request->createFlywheelRequest->dataSecurityConfig->volumeKmsKeyId = 'debitis';
    $request->createFlywheelRequest->dataSecurityConfig->vpcConfig = new VpcConfig();
    $request->createFlywheelRequest->dataSecurityConfig->vpcConfig->securityGroupIds = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->createFlywheelRequest->dataSecurityConfig->vpcConfig->subnets = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->createFlywheelRequest->flywheelName = 'facere';
    $request->createFlywheelRequest->modelType = ModelTypeEnum::DOCUMENT_CLASSIFIER;
    $request->createFlywheelRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createFlywheelRequest->taskConfig = new TaskConfig();
    $request->createFlywheelRequest->taskConfig->documentClassificationConfig = new DocumentClassificationConfig();
    $request->createFlywheelRequest->taskConfig->documentClassificationConfig->labels = [
        'accusamus',
        'non',
        'occaecati',
    ];
    $request->createFlywheelRequest->taskConfig->documentClassificationConfig->mode = DocumentClassifierModeEnum::MULTI_CLASS;
    $request->createFlywheelRequest->taskConfig->entityRecognitionConfig = new EntityRecognitionConfig();
    $request->createFlywheelRequest->taskConfig->entityRecognitionConfig->entityTypes = [
        new EntityTypesListItem(),
        new EntityTypesListItem(),
        new EntityTypesListItem(),
        new EntityTypesListItem(),
    ];
    $request->createFlywheelRequest->taskConfig->languageCode = LanguageCodeEnum::ZH_TW;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = CreateFlywheelXAmzTargetEnum::COMPREHEND20171127_CREATE_FLYWHEEL;

    $response = $sdk->sdk->createFlywheel($request);

    if ($response->createFlywheelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDocumentClassifier

<p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDocumentClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDocumentClassifierRequest();
    $request->deleteDocumentClassifierRequest = new DeleteDocumentClassifierRequest();
    $request->deleteDocumentClassifierRequest->documentClassifierArn = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteDocumentClassifierXAmzTargetEnum::COMPREHEND20171127_DELETE_DOCUMENT_CLASSIFIER;

    $response = $sdk->sdk->deleteDocumentClassifier($request);

    if ($response->deleteDocumentClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndpoint

Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndpointRequest();
    $request->deleteEndpointRequest = new DeleteEndpointRequest();
    $request->deleteEndpointRequest->endpointArn = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DeleteEndpointXAmzTargetEnum::COMPREHEND20171127_DELETE_ENDPOINT;

    $response = $sdk->sdk->deleteEndpoint($request);

    if ($response->deleteEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEntityRecognizer

<p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEntityRecognizerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEntityRecognizerRequest();
    $request->deleteEntityRecognizerRequest = new DeleteEntityRecognizerRequest();
    $request->deleteEntityRecognizerRequest->entityRecognizerArn = 'nobis';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DeleteEntityRecognizerXAmzTargetEnum::COMPREHEND20171127_DELETE_ENTITY_RECOGNIZER;

    $response = $sdk->sdk->deleteEntityRecognizer($request);

    if ($response->deleteEntityRecognizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFlywheel

<p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlywheelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFlywheelRequest();
    $request->deleteFlywheelRequest = new DeleteFlywheelRequest();
    $request->deleteFlywheelRequest->flywheelArn = 'ullam';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DeleteFlywheelXAmzTargetEnum::COMPREHEND20171127_DELETE_FLYWHEEL;

    $response = $sdk->sdk->deleteFlywheel($request);

    if ($response->deleteFlywheelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes a resource-based policy that is attached to a custom model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->policyRevisionId = 'ad';
    $request->deleteResourcePolicyRequest->resourceArn = 'eum';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::COMPREHEND20171127_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataset

Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetRequest();
    $request->describeDatasetRequest = new DescribeDatasetRequest();
    $request->describeDatasetRequest->datasetArn = 'debitis';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = DescribeDatasetXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_DATASET;

    $response = $sdk->sdk->describeDataset($request);

    if ($response->describeDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDocumentClassificationJob

Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentClassificationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDocumentClassificationJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentClassificationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDocumentClassificationJobRequest();
    $request->describeDocumentClassificationJobRequest = new DescribeDocumentClassificationJobRequest();
    $request->describeDocumentClassificationJobRequest->jobId = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = DescribeDocumentClassificationJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_DOCUMENT_CLASSIFICATION_JOB;

    $response = $sdk->sdk->describeDocumentClassificationJob($request);

    if ($response->describeDocumentClassificationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDocumentClassifier

Gets the properties associated with a document classifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDocumentClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDocumentClassifierRequest();
    $request->describeDocumentClassifierRequest = new DescribeDocumentClassifierRequest();
    $request->describeDocumentClassifierRequest->documentClassifierArn = 'pariatur';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = DescribeDocumentClassifierXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_DOCUMENT_CLASSIFIER;

    $response = $sdk->sdk->describeDocumentClassifier($request);

    if ($response->describeDocumentClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDominantLanguageDetectionJob

Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDominantLanguageDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDominantLanguageDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDominantLanguageDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDominantLanguageDetectionJobRequest();
    $request->describeDominantLanguageDetectionJobRequest = new DescribeDominantLanguageDetectionJobRequest();
    $request->describeDominantLanguageDetectionJobRequest->jobId = 'illum';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DescribeDominantLanguageDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB;

    $response = $sdk->sdk->describeDominantLanguageDetectionJob($request);

    if ($response->describeDominantLanguageDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpoint

Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointRequest();
    $request->describeEndpointRequest = new DescribeEndpointRequest();
    $request->describeEndpointRequest->endpointArn = 'ab';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = DescribeEndpointXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_ENDPOINT;

    $response = $sdk->sdk->describeEndpoint($request);

    if ($response->describeEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEntitiesDetectionJob

Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntitiesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEntitiesDetectionJobRequest();
    $request->describeEntitiesDetectionJobRequest = new DescribeEntitiesDetectionJobRequest();
    $request->describeEntitiesDetectionJobRequest->jobId = 'pariatur';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DescribeEntitiesDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_ENTITIES_DETECTION_JOB;

    $response = $sdk->sdk->describeEntitiesDetectionJob($request);

    if ($response->describeEntitiesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEntityRecognizer

Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEntityRecognizerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEntityRecognizerRequest();
    $request->describeEntityRecognizerRequest = new DescribeEntityRecognizerRequest();
    $request->describeEntityRecognizerRequest->entityRecognizerArn = 'corporis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DescribeEntityRecognizerXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_ENTITY_RECOGNIZER;

    $response = $sdk->sdk->describeEntityRecognizer($request);

    if ($response->describeEntityRecognizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventsDetectionJob

Gets the status and details of an events detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventsDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventsDetectionJobRequest();
    $request->describeEventsDetectionJobRequest = new DescribeEventsDetectionJobRequest();
    $request->describeEventsDetectionJobRequest->jobId = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DescribeEventsDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_EVENTS_DETECTION_JOB;

    $response = $sdk->sdk->describeEventsDetectionJob($request);

    if ($response->describeEventsDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFlywheel

Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlywheelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFlywheelRequest();
    $request->describeFlywheelRequest = new DescribeFlywheelRequest();
    $request->describeFlywheelRequest->flywheelArn = 'dolor';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = DescribeFlywheelXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_FLYWHEEL;

    $response = $sdk->sdk->describeFlywheel($request);

    if ($response->describeFlywheelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFlywheelIteration

Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlywheelIterationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFlywheelIterationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFlywheelIterationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFlywheelIterationRequest();
    $request->describeFlywheelIterationRequest = new DescribeFlywheelIterationRequest();
    $request->describeFlywheelIterationRequest->flywheelArn = 'voluptatem';
    $request->describeFlywheelIterationRequest->flywheelIterationId = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = DescribeFlywheelIterationXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_FLYWHEEL_ITERATION;

    $response = $sdk->sdk->describeFlywheelIteration($request);

    if ($response->describeFlywheelIterationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeKeyPhrasesDetectionJob

Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeKeyPhrasesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeKeyPhrasesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeKeyPhrasesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeKeyPhrasesDetectionJobRequest();
    $request->describeKeyPhrasesDetectionJobRequest = new DescribeKeyPhrasesDetectionJobRequest();
    $request->describeKeyPhrasesDetectionJobRequest->jobId = 'asperiores';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DescribeKeyPhrasesDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_KEY_PHRASES_DETECTION_JOB;

    $response = $sdk->sdk->describeKeyPhrasesDetectionJob($request);

    if ($response->describeKeyPhrasesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePiiEntitiesDetectionJob

Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePiiEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePiiEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePiiEntitiesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePiiEntitiesDetectionJobRequest();
    $request->describePiiEntitiesDetectionJobRequest = new DescribePiiEntitiesDetectionJobRequest();
    $request->describePiiEntitiesDetectionJobRequest->jobId = 'nobis';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribePiiEntitiesDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_PII_ENTITIES_DETECTION_JOB;

    $response = $sdk->sdk->describePiiEntitiesDetectionJob($request);

    if ($response->describePiiEntitiesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResourcePolicy

Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourcePolicyRequest();
    $request->describeResourcePolicyRequest = new DescribeResourcePolicyRequest();
    $request->describeResourcePolicyRequest->resourceArn = 'dolor';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DescribeResourcePolicyXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_RESOURCE_POLICY;

    $response = $sdk->sdk->describeResourcePolicy($request);

    if ($response->describeResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSentimentDetectionJob

Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSentimentDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSentimentDetectionJobRequest();
    $request->describeSentimentDetectionJobRequest = new DescribeSentimentDetectionJobRequest();
    $request->describeSentimentDetectionJobRequest->jobId = 'reiciendis';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = DescribeSentimentDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_SENTIMENT_DETECTION_JOB;

    $response = $sdk->sdk->describeSentimentDetectionJob($request);

    if ($response->describeSentimentDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTargetedSentimentDetectionJob

Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTargetedSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTargetedSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTargetedSentimentDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTargetedSentimentDetectionJobRequest();
    $request->describeTargetedSentimentDetectionJobRequest = new DescribeTargetedSentimentDetectionJobRequest();
    $request->describeTargetedSentimentDetectionJobRequest->jobId = 'odio';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = DescribeTargetedSentimentDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB;

    $response = $sdk->sdk->describeTargetedSentimentDetectionJob($request);

    if ($response->describeTargetedSentimentDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTopicsDetectionJob

Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTopicsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTopicsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTopicsDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTopicsDetectionJobRequest();
    $request->describeTopicsDetectionJobRequest = new DescribeTopicsDetectionJobRequest();
    $request->describeTopicsDetectionJobRequest->jobId = 'atque';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DescribeTopicsDetectionJobXAmzTargetEnum::COMPREHEND20171127_DESCRIBE_TOPICS_DETECTION_JOB;

    $response = $sdk->sdk->describeTopicsDetectionJob($request);

    if ($response->describeTopicsDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectDominantLanguage

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectDominantLanguageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectDominantLanguageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetectDominantLanguageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectDominantLanguageRequest();
    $request->detectDominantLanguageRequest = new DetectDominantLanguageRequest();
    $request->detectDominantLanguageRequest->text = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DetectDominantLanguageXAmzTargetEnum::COMPREHEND20171127_DETECT_DOMINANT_LANGUAGE;

    $response = $sdk->sdk->detectDominantLanguage($request);

    if ($response->detectDominantLanguageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectEntities

<p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DetectEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectEntitiesRequest();
    $request->detectEntitiesRequest = new DetectEntitiesRequest();
    $request->detectEntitiesRequest->bytes = 'voluptate';
    $request->detectEntitiesRequest->documentReaderConfig = new DocumentReaderConfig();
    $request->detectEntitiesRequest->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_ANALYZE_DOCUMENT;
    $request->detectEntitiesRequest->documentReaderConfig->documentReadMode = DocumentReadModeEnum::FORCE_DOCUMENT_READ_ACTION;
    $request->detectEntitiesRequest->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::TABLES,
    ];
    $request->detectEntitiesRequest->endpointArn = 'amet';
    $request->detectEntitiesRequest->languageCode = LanguageCodeEnum::KO;
    $request->detectEntitiesRequest->text = 'accusamus';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = DetectEntitiesXAmzTargetEnum::COMPREHEND20171127_DETECT_ENTITIES;

    $response = $sdk->sdk->detectEntities($request);

    if ($response->detectEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectKeyPhrases

Detects the key noun phrases found in the text. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectKeyPhrasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectKeyPhrasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DetectKeyPhrasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectKeyPhrasesRequest();
    $request->detectKeyPhrasesRequest = new DetectKeyPhrasesRequest();
    $request->detectKeyPhrasesRequest->languageCode = LanguageCodeEnum::AR;
    $request->detectKeyPhrasesRequest->text = 'similique';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = DetectKeyPhrasesXAmzTargetEnum::COMPREHEND20171127_DETECT_KEY_PHRASES;

    $response = $sdk->sdk->detectKeyPhrases($request);

    if ($response->detectKeyPhrasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectPiiEntities

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectPiiEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectPiiEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DetectPiiEntitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectPiiEntitiesRequest();
    $request->detectPiiEntitiesRequest = new DetectPiiEntitiesRequest();
    $request->detectPiiEntitiesRequest->languageCode = LanguageCodeEnum::FR;
    $request->detectPiiEntitiesRequest->text = 'dolorum';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = DetectPiiEntitiesXAmzTargetEnum::COMPREHEND20171127_DETECT_PII_ENTITIES;

    $response = $sdk->sdk->detectPiiEntities($request);

    if ($response->detectPiiEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectSentiment

Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DetectSentimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectSentimentRequest();
    $request->detectSentimentRequest = new DetectSentimentRequest();
    $request->detectSentimentRequest->languageCode = LanguageCodeEnum::FR;
    $request->detectSentimentRequest->text = 'tempore';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DetectSentimentXAmzTargetEnum::COMPREHEND20171127_DETECT_SENTIMENT;

    $response = $sdk->sdk->detectSentiment($request);

    if ($response->detectSentimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectSyntax

Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectSyntaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectSyntaxRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyntaxLanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DetectSyntaxXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectSyntaxRequest();
    $request->detectSyntaxRequest = new DetectSyntaxRequest();
    $request->detectSyntaxRequest->languageCode = SyntaxLanguageCodeEnum::EN;
    $request->detectSyntaxRequest->text = 'expedita';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DetectSyntaxXAmzTargetEnum::COMPREHEND20171127_DETECT_SYNTAX;

    $response = $sdk->sdk->detectSyntax($request);

    if ($response->detectSyntaxResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detectTargetedSentiment

<p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetectTargetedSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DetectTargetedSentimentRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DetectTargetedSentimentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetectTargetedSentimentRequest();
    $request->detectTargetedSentimentRequest = new DetectTargetedSentimentRequest();
    $request->detectTargetedSentimentRequest->languageCode = LanguageCodeEnum::FR;
    $request->detectTargetedSentimentRequest->text = 'incidunt';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DetectTargetedSentimentXAmzTargetEnum::COMPREHEND20171127_DETECT_TARGETED_SENTIMENT;

    $response = $sdk->sdk->detectTargetedSentiment($request);

    if ($response->detectTargetedSentimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importModel

<p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportModelRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ImportModelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportModelRequest();
    $request->importModelRequest = new ImportModelRequest();
    $request->importModelRequest->dataAccessRoleArn = 'totam';
    $request->importModelRequest->modelKmsKeyId = 'incidunt';
    $request->importModelRequest->modelName = 'aspernatur';
    $request->importModelRequest->sourceModelArn = 'dolores';
    $request->importModelRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->importModelRequest->versionName = 'facilis';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = ImportModelXAmzTargetEnum::COMPREHEND20171127_IMPORT_MODEL;

    $response = $sdk->sdk->importModel($request);

    if ($response->importModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets

List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatasetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatasetFilter;
use \OpenAPI\OpenAPI\Models\Shared\DatasetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatasetStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetsRequest();
    $request->listDatasetsRequest = new ListDatasetsRequest();
    $request->listDatasetsRequest->filter = new DatasetFilter();
    $request->listDatasetsRequest->filter->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T20:37:36.497Z');
    $request->listDatasetsRequest->filter->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T04:49:56.144Z');
    $request->listDatasetsRequest->filter->datasetType = DatasetTypeEnum::TEST;
    $request->listDatasetsRequest->filter->status = DatasetStatusEnum::FAILED;
    $request->listDatasetsRequest->flywheelArn = 'voluptatem';
    $request->listDatasetsRequest->maxResults = 765326;
    $request->listDatasetsRequest->nextToken = 'soluta';
    $request->maxResults = 'nobis';
    $request->nextToken = 'et';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = ListDatasetsXAmzTargetEnum::COMPREHEND20171127_LIST_DATASETS;

    $response = $sdk->sdk->listDatasets($request);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocumentClassificationJobs

Gets a list of the documentation classification jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentClassificationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDocumentClassificationJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassificationJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentClassificationJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentClassificationJobsRequest();
    $request->listDocumentClassificationJobsRequest = new ListDocumentClassificationJobsRequest();
    $request->listDocumentClassificationJobsRequest->filter = new DocumentClassificationJobFilter();
    $request->listDocumentClassificationJobsRequest->filter->jobName = 'aperiam';
    $request->listDocumentClassificationJobsRequest->filter->jobStatus = JobStatusEnum::STOPPED;
    $request->listDocumentClassificationJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T08:47:14.764Z');
    $request->listDocumentClassificationJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T02:20:22.923Z');
    $request->listDocumentClassificationJobsRequest->maxResults = 677263;
    $request->listDocumentClassificationJobsRequest->nextToken = 'architecto';
    $request->maxResults = 'quae';
    $request->nextToken = 'aut';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = ListDocumentClassificationJobsXAmzTargetEnum::COMPREHEND20171127_LIST_DOCUMENT_CLASSIFICATION_JOBS;

    $response = $sdk->sdk->listDocumentClassificationJobs($request);

    if ($response->listDocumentClassificationJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocumentClassifierSummaries

Gets a list of summaries of the document classifiers that you have created

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentClassifierSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDocumentClassifierSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentClassifierSummariesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentClassifierSummariesRequest();
    $request->listDocumentClassifierSummariesRequest = new ListDocumentClassifierSummariesRequest();
    $request->listDocumentClassifierSummariesRequest->maxResults = 281730;
    $request->listDocumentClassifierSummariesRequest->nextToken = 'facilis';
    $request->maxResults = 'cupiditate';
    $request->nextToken = 'qui';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = ListDocumentClassifierSummariesXAmzTargetEnum::COMPREHEND20171127_LIST_DOCUMENT_CLASSIFIER_SUMMARIES;

    $response = $sdk->sdk->listDocumentClassifierSummaries($request);

    if ($response->listDocumentClassifierSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocumentClassifiers

Gets a list of the document classifiers that you have created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentClassifiersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDocumentClassifiersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DocumentClassifierFilter;
use \OpenAPI\OpenAPI\Models\Shared\ModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentClassifiersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentClassifiersRequest();
    $request->listDocumentClassifiersRequest = new ListDocumentClassifiersRequest();
    $request->listDocumentClassifiersRequest->filter = new DocumentClassifierFilter();
    $request->listDocumentClassifiersRequest->filter->documentClassifierName = 'omnis';
    $request->listDocumentClassifiersRequest->filter->status = ModelStatusEnum::DELETING;
    $request->listDocumentClassifiersRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T00:38:43.469Z');
    $request->listDocumentClassifiersRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T10:17:36.770Z');
    $request->listDocumentClassifiersRequest->maxResults = 878870;
    $request->listDocumentClassifiersRequest->nextToken = 'tenetur';
    $request->maxResults = 'dignissimos';
    $request->nextToken = 'hic';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = ListDocumentClassifiersXAmzTargetEnum::COMPREHEND20171127_LIST_DOCUMENT_CLASSIFIERS;

    $response = $sdk->sdk->listDocumentClassifiers($request);

    if ($response->listDocumentClassifiersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDominantLanguageDetectionJobs

Gets a list of the dominant language detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDominantLanguageDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDominantLanguageDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DominantLanguageDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDominantLanguageDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDominantLanguageDetectionJobsRequest();
    $request->listDominantLanguageDetectionJobsRequest = new ListDominantLanguageDetectionJobsRequest();
    $request->listDominantLanguageDetectionJobsRequest->filter = new DominantLanguageDetectionJobFilter();
    $request->listDominantLanguageDetectionJobsRequest->filter->jobName = 'dolore';
    $request->listDominantLanguageDetectionJobsRequest->filter->jobStatus = JobStatusEnum::STOPPED;
    $request->listDominantLanguageDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T04:41:10.492Z');
    $request->listDominantLanguageDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-15T11:19:41.363Z');
    $request->listDominantLanguageDetectionJobsRequest->maxResults = 13236;
    $request->listDominantLanguageDetectionJobsRequest->nextToken = 'voluptatibus';
    $request->maxResults = 'exercitationem';
    $request->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = ListDominantLanguageDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_DOMINANT_LANGUAGE_DETECTION_JOBS;

    $response = $sdk->sdk->listDominantLanguageDetectionJobs($request);

    if ($response->listDominantLanguageDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEndpoints

Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointFilter;
use \OpenAPI\OpenAPI\Models\Shared\EndpointStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEndpointsRequest();
    $request->listEndpointsRequest = new ListEndpointsRequest();
    $request->listEndpointsRequest->filter = new EndpointFilter();
    $request->listEndpointsRequest->filter->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-12T14:13:14.359Z');
    $request->listEndpointsRequest->filter->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T11:11:55.326Z');
    $request->listEndpointsRequest->filter->modelArn = 'ea';
    $request->listEndpointsRequest->filter->status = EndpointStatusEnum::CREATING;
    $request->listEndpointsRequest->maxResults = 428224;
    $request->listEndpointsRequest->nextToken = 'possimus';
    $request->maxResults = 'magnam';
    $request->nextToken = 'ratione';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = ListEndpointsXAmzTargetEnum::COMPREHEND20171127_LIST_ENDPOINTS;

    $response = $sdk->sdk->listEndpoints($request);

    if ($response->listEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntitiesDetectionJobs

Gets a list of the entity detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEntitiesDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntitiesDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEntitiesDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntitiesDetectionJobsRequest();
    $request->listEntitiesDetectionJobsRequest = new ListEntitiesDetectionJobsRequest();
    $request->listEntitiesDetectionJobsRequest->filter = new EntitiesDetectionJobFilter();
    $request->listEntitiesDetectionJobsRequest->filter->jobName = 'nulla';
    $request->listEntitiesDetectionJobsRequest->filter->jobStatus = JobStatusEnum::FAILED;
    $request->listEntitiesDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-20T18:02:50.249Z');
    $request->listEntitiesDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-20T04:25:24.387Z');
    $request->listEntitiesDetectionJobsRequest->maxResults = 906556;
    $request->listEntitiesDetectionJobsRequest->nextToken = 'ea';
    $request->maxResults = 'impedit';
    $request->nextToken = 'corporis';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = ListEntitiesDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_ENTITIES_DETECTION_JOBS;

    $response = $sdk->sdk->listEntitiesDetectionJobs($request);

    if ($response->listEntitiesDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntityRecognizerSummaries

Gets a list of summaries for the entity recognizers that you have created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntityRecognizerSummariesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEntityRecognizerSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEntityRecognizerSummariesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntityRecognizerSummariesRequest();
    $request->listEntityRecognizerSummariesRequest = new ListEntityRecognizerSummariesRequest();
    $request->listEntityRecognizerSummariesRequest->maxResults = 926213;
    $request->listEntityRecognizerSummariesRequest->nextToken = 'aspernatur';
    $request->maxResults = 'minima';
    $request->nextToken = 'eaque';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = ListEntityRecognizerSummariesXAmzTargetEnum::COMPREHEND20171127_LIST_ENTITY_RECOGNIZER_SUMMARIES;

    $response = $sdk->sdk->listEntityRecognizerSummaries($request);

    if ($response->listEntityRecognizerSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEntityRecognizers

<p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEntityRecognizersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEntityRecognizersRequest;
use \OpenAPI\OpenAPI\Models\Shared\EntityRecognizerFilter;
use \OpenAPI\OpenAPI\Models\Shared\ModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEntityRecognizersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEntityRecognizersRequest();
    $request->listEntityRecognizersRequest = new ListEntityRecognizersRequest();
    $request->listEntityRecognizersRequest->filter = new EntityRecognizerFilter();
    $request->listEntityRecognizersRequest->filter->recognizerName = 'fugit';
    $request->listEntityRecognizersRequest->filter->status = ModelStatusEnum::TRAINED_WITH_WARNING;
    $request->listEntityRecognizersRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-01T12:32:41.161Z');
    $request->listEntityRecognizersRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T17:52:20.381Z');
    $request->listEntityRecognizersRequest->maxResults = 672048;
    $request->listEntityRecognizersRequest->nextToken = 'placeat';
    $request->maxResults = 'velit';
    $request->nextToken = 'eum';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = ListEntityRecognizersXAmzTargetEnum::COMPREHEND20171127_LIST_ENTITY_RECOGNIZERS;

    $response = $sdk->sdk->listEntityRecognizers($request);

    if ($response->listEntityRecognizersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventsDetectionJobs

Gets a list of the events detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEventsDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EventsDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventsDetectionJobsRequest();
    $request->listEventsDetectionJobsRequest = new ListEventsDetectionJobsRequest();
    $request->listEventsDetectionJobsRequest->filter = new EventsDetectionJobFilter();
    $request->listEventsDetectionJobsRequest->filter->jobName = 'quasi';
    $request->listEventsDetectionJobsRequest->filter->jobStatus = JobStatusEnum::IN_PROGRESS;
    $request->listEventsDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T00:12:37.683Z');
    $request->listEventsDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-21T13:50:30.142Z');
    $request->listEventsDetectionJobsRequest->maxResults = 476477;
    $request->listEventsDetectionJobsRequest->nextToken = 'magnam';
    $request->maxResults = 'odio';
    $request->nextToken = 'eius';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = ListEventsDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_EVENTS_DETECTION_JOBS;

    $response = $sdk->sdk->listEventsDetectionJobs($request);

    if ($response->listEventsDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFlywheelIterationHistory

Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFlywheelIterationHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFlywheelIterationHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlywheelIterationFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListFlywheelIterationHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlywheelIterationHistoryRequest();
    $request->listFlywheelIterationHistoryRequest = new ListFlywheelIterationHistoryRequest();
    $request->listFlywheelIterationHistoryRequest->filter = new FlywheelIterationFilter();
    $request->listFlywheelIterationHistoryRequest->filter->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T19:04:27.877Z');
    $request->listFlywheelIterationHistoryRequest->filter->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-05T04:36:55.913Z');
    $request->listFlywheelIterationHistoryRequest->flywheelArn = 'eos';
    $request->listFlywheelIterationHistoryRequest->maxResults = 509342;
    $request->listFlywheelIterationHistoryRequest->nextToken = 'quisquam';
    $request->maxResults = 'veritatis';
    $request->nextToken = 'ipsa';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = ListFlywheelIterationHistoryXAmzTargetEnum::COMPREHEND20171127_LIST_FLYWHEEL_ITERATION_HISTORY;

    $response = $sdk->sdk->listFlywheelIterationHistory($request);

    if ($response->listFlywheelIterationHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFlywheels

Gets a list of the flywheels that you have created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFlywheelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFlywheelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlywheelFilter;
use \OpenAPI\OpenAPI\Models\Shared\FlywheelStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFlywheelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlywheelsRequest();
    $request->listFlywheelsRequest = new ListFlywheelsRequest();
    $request->listFlywheelsRequest->filter = new FlywheelFilter();
    $request->listFlywheelsRequest->filter->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T21:30:06.318Z');
    $request->listFlywheelsRequest->filter->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T12:02:05.098Z');
    $request->listFlywheelsRequest->filter->status = FlywheelStatusEnum::UPDATING;
    $request->listFlywheelsRequest->maxResults = 9688;
    $request->listFlywheelsRequest->nextToken = 'tempora';
    $request->maxResults = 'debitis';
    $request->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = ListFlywheelsXAmzTargetEnum::COMPREHEND20171127_LIST_FLYWHEELS;

    $response = $sdk->sdk->listFlywheels($request);

    if ($response->listFlywheelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listKeyPhrasesDetectionJobs

Get a list of key phrase detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListKeyPhrasesDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListKeyPhrasesDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeyPhrasesDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListKeyPhrasesDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListKeyPhrasesDetectionJobsRequest();
    $request->listKeyPhrasesDetectionJobsRequest = new ListKeyPhrasesDetectionJobsRequest();
    $request->listKeyPhrasesDetectionJobsRequest->filter = new KeyPhrasesDetectionJobFilter();
    $request->listKeyPhrasesDetectionJobsRequest->filter->jobName = 'quod';
    $request->listKeyPhrasesDetectionJobsRequest->filter->jobStatus = JobStatusEnum::COMPLETED;
    $request->listKeyPhrasesDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-13T15:11:40.912Z');
    $request->listKeyPhrasesDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-27T14:55:59.726Z');
    $request->listKeyPhrasesDetectionJobsRequest->maxResults = 306810;
    $request->listKeyPhrasesDetectionJobsRequest->nextToken = 'odio';
    $request->maxResults = 'occaecati';
    $request->nextToken = 'commodi';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListKeyPhrasesDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_KEY_PHRASES_DETECTION_JOBS;

    $response = $sdk->sdk->listKeyPhrasesDetectionJobs($request);

    if ($response->listKeyPhrasesDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPiiEntitiesDetectionJobs

Gets a list of the PII entity detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPiiEntitiesDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPiiEntitiesDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PiiEntitiesDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPiiEntitiesDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPiiEntitiesDetectionJobsRequest();
    $request->listPiiEntitiesDetectionJobsRequest = new ListPiiEntitiesDetectionJobsRequest();
    $request->listPiiEntitiesDetectionJobsRequest->filter = new PiiEntitiesDetectionJobFilter();
    $request->listPiiEntitiesDetectionJobsRequest->filter->jobName = 'quas';
    $request->listPiiEntitiesDetectionJobsRequest->filter->jobStatus = JobStatusEnum::FAILED;
    $request->listPiiEntitiesDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-19T07:05:05.913Z');
    $request->listPiiEntitiesDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T07:00:05.421Z');
    $request->listPiiEntitiesDetectionJobsRequest->maxResults = 649463;
    $request->listPiiEntitiesDetectionJobsRequest->nextToken = 'incidunt';
    $request->maxResults = 'atque';
    $request->nextToken = 'explicabo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = ListPiiEntitiesDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_PII_ENTITIES_DETECTION_JOBS;

    $response = $sdk->sdk->listPiiEntitiesDetectionJobs($request);

    if ($response->listPiiEntitiesDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSentimentDetectionJobs

Gets a list of sentiment detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSentimentDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSentimentDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SentimentDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSentimentDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSentimentDetectionJobsRequest();
    $request->listSentimentDetectionJobsRequest = new ListSentimentDetectionJobsRequest();
    $request->listSentimentDetectionJobsRequest->filter = new SentimentDetectionJobFilter();
    $request->listSentimentDetectionJobsRequest->filter->jobName = 'saepe';
    $request->listSentimentDetectionJobsRequest->filter->jobStatus = JobStatusEnum::FAILED;
    $request->listSentimentDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T15:36:05.649Z');
    $request->listSentimentDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T15:37:41.657Z');
    $request->listSentimentDetectionJobsRequest->maxResults = 882042;
    $request->listSentimentDetectionJobsRequest->nextToken = 'veritatis';
    $request->maxResults = 'esse';
    $request->nextToken = 'quod';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'harum';
    $request->xAmzTarget = ListSentimentDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_SENTIMENT_DETECTION_JOBS;

    $response = $sdk->sdk->listSentimentDetectionJobs($request);

    if ($response->listSentimentDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags associated with a given Amazon Comprehend resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'molestiae';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::COMPREHEND20171127_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargetedSentimentDetectionJobs

Gets a list of targeted sentiment detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetedSentimentDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetedSentimentDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetedSentimentDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetedSentimentDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetedSentimentDetectionJobsRequest();
    $request->listTargetedSentimentDetectionJobsRequest = new ListTargetedSentimentDetectionJobsRequest();
    $request->listTargetedSentimentDetectionJobsRequest->filter = new TargetedSentimentDetectionJobFilter();
    $request->listTargetedSentimentDetectionJobsRequest->filter->jobName = 'tempore';
    $request->listTargetedSentimentDetectionJobsRequest->filter->jobStatus = JobStatusEnum::IN_PROGRESS;
    $request->listTargetedSentimentDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T05:02:22.250Z');
    $request->listTargetedSentimentDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T07:36:38.247Z');
    $request->listTargetedSentimentDetectionJobsRequest->maxResults = 308286;
    $request->listTargetedSentimentDetectionJobsRequest->nextToken = 'sapiente';
    $request->maxResults = 'consectetur';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = ListTargetedSentimentDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_TARGETED_SENTIMENT_DETECTION_JOBS;

    $response = $sdk->sdk->listTargetedSentimentDetectionJobs($request);

    if ($response->listTargetedSentimentDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTopicsDetectionJobs

Gets a list of the topic detection jobs that you have submitted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTopicsDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTopicsDetectionJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TopicsDetectionJobFilter;
use \OpenAPI\OpenAPI\Models\Shared\JobStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTopicsDetectionJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTopicsDetectionJobsRequest();
    $request->listTopicsDetectionJobsRequest = new ListTopicsDetectionJobsRequest();
    $request->listTopicsDetectionJobsRequest->filter = new TopicsDetectionJobFilter();
    $request->listTopicsDetectionJobsRequest->filter->jobName = 'a';
    $request->listTopicsDetectionJobsRequest->filter->jobStatus = JobStatusEnum::FAILED;
    $request->listTopicsDetectionJobsRequest->filter->submitTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-10T23:50:37.359Z');
    $request->listTopicsDetectionJobsRequest->filter->submitTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T09:25:25.257Z');
    $request->listTopicsDetectionJobsRequest->maxResults = 908844;
    $request->listTopicsDetectionJobsRequest->nextToken = 'asperiores';
    $request->maxResults = 'facere';
    $request->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = ListTopicsDetectionJobsXAmzTargetEnum::COMPREHEND20171127_LIST_TOPICS_DETECTION_JOBS;

    $response = $sdk->sdk->listTopicsDetectionJobs($request);

    if ($response->listTopicsDetectionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->policyRevisionId = 'earum';
    $request->putResourcePolicyRequest->resourceArn = 'vel';
    $request->putResourcePolicyRequest->resourcePolicy = 'in';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::COMPREHEND20171127_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDocumentClassificationJob

Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDocumentClassificationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDocumentClassificationJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartDocumentClassificationJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDocumentClassificationJobRequest();
    $request->startDocumentClassificationJobRequest = new StartDocumentClassificationJobRequest();
    $request->startDocumentClassificationJobRequest->clientRequestToken = 'dicta';
    $request->startDocumentClassificationJobRequest->dataAccessRoleArn = 'ullam';
    $request->startDocumentClassificationJobRequest->documentClassifierArn = 'reprehenderit';
    $request->startDocumentClassificationJobRequest->flywheelArn = 'ullam';
    $request->startDocumentClassificationJobRequest->inputDataConfig = new InputDataConfig();
    $request->startDocumentClassificationJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startDocumentClassificationJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_DETECT_DOCUMENT_TEXT;
    $request->startDocumentClassificationJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::SERVICE_DEFAULT;
    $request->startDocumentClassificationJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::FORMS,
        DocumentReadFeatureTypesEnum::TABLES,
    ];
    $request->startDocumentClassificationJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_LINE;
    $request->startDocumentClassificationJobRequest->inputDataConfig->s3Uri = 'itaque';
    $request->startDocumentClassificationJobRequest->jobName = 'dolorum';
    $request->startDocumentClassificationJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startDocumentClassificationJobRequest->outputDataConfig->kmsKeyId = 'architecto';
    $request->startDocumentClassificationJobRequest->outputDataConfig->s3Uri = 'omnis';
    $request->startDocumentClassificationJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->startDocumentClassificationJobRequest->volumeKmsKeyId = 'quasi';
    $request->startDocumentClassificationJobRequest->vpcConfig = new VpcConfig();
    $request->startDocumentClassificationJobRequest->vpcConfig->securityGroupIds = [
        'et',
        'voluptate',
        'ipsa',
        'minima',
    ];
    $request->startDocumentClassificationJobRequest->vpcConfig->subnets = [
        'consectetur',
    ];
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = StartDocumentClassificationJobXAmzTargetEnum::COMPREHEND20171127_START_DOCUMENT_CLASSIFICATION_JOB;

    $response = $sdk->sdk->startDocumentClassificationJob($request);

    if ($response->startDocumentClassificationJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDominantLanguageDetectionJob

Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDominantLanguageDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDominantLanguageDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartDominantLanguageDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDominantLanguageDetectionJobRequest();
    $request->startDominantLanguageDetectionJobRequest = new StartDominantLanguageDetectionJobRequest();
    $request->startDominantLanguageDetectionJobRequest->clientRequestToken = 'eum';
    $request->startDominantLanguageDetectionJobRequest->dataAccessRoleArn = 'mollitia';
    $request->startDominantLanguageDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startDominantLanguageDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startDominantLanguageDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_DETECT_DOCUMENT_TEXT;
    $request->startDominantLanguageDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::FORCE_DOCUMENT_READ_ACTION;
    $request->startDominantLanguageDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::TABLES,
    ];
    $request->startDominantLanguageDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_LINE;
    $request->startDominantLanguageDetectionJobRequest->inputDataConfig->s3Uri = 'numquam';
    $request->startDominantLanguageDetectionJobRequest->jobName = 'impedit';
    $request->startDominantLanguageDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startDominantLanguageDetectionJobRequest->outputDataConfig->kmsKeyId = 'explicabo';
    $request->startDominantLanguageDetectionJobRequest->outputDataConfig->s3Uri = 'voluptas';
    $request->startDominantLanguageDetectionJobRequest->tags = [
        new Tag(),
    ];
    $request->startDominantLanguageDetectionJobRequest->volumeKmsKeyId = 'dignissimos';
    $request->startDominantLanguageDetectionJobRequest->vpcConfig = new VpcConfig();
    $request->startDominantLanguageDetectionJobRequest->vpcConfig->securityGroupIds = [
        'maiores',
    ];
    $request->startDominantLanguageDetectionJobRequest->vpcConfig->subnets = [
        'velit',
        'voluptatibus',
        'voluptas',
    ];
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = StartDominantLanguageDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_DOMINANT_LANGUAGE_DETECTION_JOB;

    $response = $sdk->sdk->startDominantLanguageDetectionJob($request);

    if ($response->startDominantLanguageDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startEntitiesDetectionJob

<p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartEntitiesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartEntitiesDetectionJobRequest();
    $request->startEntitiesDetectionJobRequest = new StartEntitiesDetectionJobRequest();
    $request->startEntitiesDetectionJobRequest->clientRequestToken = 'maxime';
    $request->startEntitiesDetectionJobRequest->dataAccessRoleArn = 'dignissimos';
    $request->startEntitiesDetectionJobRequest->entityRecognizerArn = 'officia';
    $request->startEntitiesDetectionJobRequest->flywheelArn = 'asperiores';
    $request->startEntitiesDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_DETECT_DOCUMENT_TEXT;
    $request->startEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::SERVICE_DEFAULT;
    $request->startEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::FORMS,
        DocumentReadFeatureTypesEnum::FORMS,
    ];
    $request->startEntitiesDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_FILE;
    $request->startEntitiesDetectionJobRequest->inputDataConfig->s3Uri = 'ab';
    $request->startEntitiesDetectionJobRequest->jobName = 'adipisci';
    $request->startEntitiesDetectionJobRequest->languageCode = LanguageCodeEnum::JA;
    $request->startEntitiesDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startEntitiesDetectionJobRequest->outputDataConfig->kmsKeyId = 'id';
    $request->startEntitiesDetectionJobRequest->outputDataConfig->s3Uri = 'suscipit';
    $request->startEntitiesDetectionJobRequest->tags = [
        new Tag(),
    ];
    $request->startEntitiesDetectionJobRequest->volumeKmsKeyId = 'culpa';
    $request->startEntitiesDetectionJobRequest->vpcConfig = new VpcConfig();
    $request->startEntitiesDetectionJobRequest->vpcConfig->securityGroupIds = [
        'recusandae',
        'totam',
        'fugiat',
    ];
    $request->startEntitiesDetectionJobRequest->vpcConfig->subnets = [
        'ducimus',
        'quos',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = StartEntitiesDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_ENTITIES_DETECTION_JOB;

    $response = $sdk->sdk->startEntitiesDetectionJob($request);

    if ($response->startEntitiesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startEventsDetectionJob

Starts an asynchronous event detection job for a collection of documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartEventsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartEventsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\StartEventsDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartEventsDetectionJobRequest();
    $request->startEventsDetectionJobRequest = new StartEventsDetectionJobRequest();
    $request->startEventsDetectionJobRequest->clientRequestToken = 'corporis';
    $request->startEventsDetectionJobRequest->dataAccessRoleArn = 'reiciendis';
    $request->startEventsDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startEventsDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startEventsDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_ANALYZE_DOCUMENT;
    $request->startEventsDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::SERVICE_DEFAULT;
    $request->startEventsDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::FORMS,
        DocumentReadFeatureTypesEnum::TABLES,
    ];
    $request->startEventsDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_FILE;
    $request->startEventsDetectionJobRequest->inputDataConfig->s3Uri = 'exercitationem';
    $request->startEventsDetectionJobRequest->jobName = 'earum';
    $request->startEventsDetectionJobRequest->languageCode = LanguageCodeEnum::KO;
    $request->startEventsDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startEventsDetectionJobRequest->outputDataConfig->kmsKeyId = 'numquam';
    $request->startEventsDetectionJobRequest->outputDataConfig->s3Uri = 'doloribus';
    $request->startEventsDetectionJobRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->startEventsDetectionJobRequest->targetEventTypes = [
        'quidem',
        'saepe',
        'necessitatibus',
        'dolore',
    ];
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = StartEventsDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_EVENTS_DETECTION_JOB;

    $response = $sdk->sdk->startEventsDetectionJob($request);

    if ($response->startEventsDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFlywheelIteration

Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFlywheelIterationRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartFlywheelIterationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartFlywheelIterationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFlywheelIterationRequest();
    $request->startFlywheelIterationRequest = new StartFlywheelIterationRequest();
    $request->startFlywheelIterationRequest->clientRequestToken = 'a';
    $request->startFlywheelIterationRequest->flywheelArn = 'debitis';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = StartFlywheelIterationXAmzTargetEnum::COMPREHEND20171127_START_FLYWHEEL_ITERATION;

    $response = $sdk->sdk->startFlywheelIteration($request);

    if ($response->startFlywheelIterationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startKeyPhrasesDetectionJob

Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartKeyPhrasesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartKeyPhrasesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartKeyPhrasesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartKeyPhrasesDetectionJobRequest();
    $request->startKeyPhrasesDetectionJobRequest = new StartKeyPhrasesDetectionJobRequest();
    $request->startKeyPhrasesDetectionJobRequest->clientRequestToken = 'vitae';
    $request->startKeyPhrasesDetectionJobRequest->dataAccessRoleArn = 'accusamus';
    $request->startKeyPhrasesDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startKeyPhrasesDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startKeyPhrasesDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_ANALYZE_DOCUMENT;
    $request->startKeyPhrasesDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::SERVICE_DEFAULT;
    $request->startKeyPhrasesDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::TABLES,
    ];
    $request->startKeyPhrasesDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_FILE;
    $request->startKeyPhrasesDetectionJobRequest->inputDataConfig->s3Uri = 'voluptas';
    $request->startKeyPhrasesDetectionJobRequest->jobName = 'minima';
    $request->startKeyPhrasesDetectionJobRequest->languageCode = LanguageCodeEnum::JA;
    $request->startKeyPhrasesDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startKeyPhrasesDetectionJobRequest->outputDataConfig->kmsKeyId = 'dolorum';
    $request->startKeyPhrasesDetectionJobRequest->outputDataConfig->s3Uri = 'adipisci';
    $request->startKeyPhrasesDetectionJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->startKeyPhrasesDetectionJobRequest->volumeKmsKeyId = 'dolores';
    $request->startKeyPhrasesDetectionJobRequest->vpcConfig = new VpcConfig();
    $request->startKeyPhrasesDetectionJobRequest->vpcConfig->securityGroupIds = [
        'in',
        'dolore',
        'aliquam',
    ];
    $request->startKeyPhrasesDetectionJobRequest->vpcConfig->subnets = [
        'temporibus',
        'ullam',
        'adipisci',
        'cum',
    ];
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = StartKeyPhrasesDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_KEY_PHRASES_DETECTION_JOB;

    $response = $sdk->sdk->startKeyPhrasesDetectionJob($request);

    if ($response->startKeyPhrasesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startPiiEntitiesDetectionJob

Starts an asynchronous PII entity detection job for a collection of documents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartPiiEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartPiiEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PiiEntitiesDetectionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\RedactionConfig;
use \OpenAPI\OpenAPI\Models\Shared\PiiEntitiesDetectionMaskModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PiiEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\StartPiiEntitiesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartPiiEntitiesDetectionJobRequest();
    $request->startPiiEntitiesDetectionJobRequest = new StartPiiEntitiesDetectionJobRequest();
    $request->startPiiEntitiesDetectionJobRequest->clientRequestToken = 'totam';
    $request->startPiiEntitiesDetectionJobRequest->dataAccessRoleArn = 'hic';
    $request->startPiiEntitiesDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startPiiEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startPiiEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_DETECT_DOCUMENT_TEXT;
    $request->startPiiEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::FORCE_DOCUMENT_READ_ACTION;
    $request->startPiiEntitiesDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::FORMS,
    ];
    $request->startPiiEntitiesDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_FILE;
    $request->startPiiEntitiesDetectionJobRequest->inputDataConfig->s3Uri = 'reiciendis';
    $request->startPiiEntitiesDetectionJobRequest->jobName = 'explicabo';
    $request->startPiiEntitiesDetectionJobRequest->languageCode = LanguageCodeEnum::ZH_TW;
    $request->startPiiEntitiesDetectionJobRequest->mode = PiiEntitiesDetectionModeEnum::ONLY_OFFSETS;
    $request->startPiiEntitiesDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startPiiEntitiesDetectionJobRequest->outputDataConfig->kmsKeyId = 'voluptate';
    $request->startPiiEntitiesDetectionJobRequest->outputDataConfig->s3Uri = 'expedita';
    $request->startPiiEntitiesDetectionJobRequest->redactionConfig = new RedactionConfig();
    $request->startPiiEntitiesDetectionJobRequest->redactionConfig->maskCharacter = 'ab';
    $request->startPiiEntitiesDetectionJobRequest->redactionConfig->maskMode = PiiEntitiesDetectionMaskModeEnum::REPLACE_WITH_PII_ENTITY_TYPE;
    $request->startPiiEntitiesDetectionJobRequest->redactionConfig->piiEntityTypes = [
        PiiEntityTypeEnum::VEHICLE_IDENTIFICATION_NUMBER,
        PiiEntityTypeEnum::PIN,
    ];
    $request->startPiiEntitiesDetectionJobRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = StartPiiEntitiesDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_PII_ENTITIES_DETECTION_JOB;

    $response = $sdk->sdk->startPiiEntitiesDetectionJob($request);

    if ($response->startPiiEntitiesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSentimentDetectionJob

Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartSentimentDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSentimentDetectionJobRequest();
    $request->startSentimentDetectionJobRequest = new StartSentimentDetectionJobRequest();
    $request->startSentimentDetectionJobRequest->clientRequestToken = 'sapiente';
    $request->startSentimentDetectionJobRequest->dataAccessRoleArn = 'debitis';
    $request->startSentimentDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_DETECT_DOCUMENT_TEXT;
    $request->startSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::FORCE_DOCUMENT_READ_ACTION;
    $request->startSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::FORMS,
    ];
    $request->startSentimentDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_LINE;
    $request->startSentimentDetectionJobRequest->inputDataConfig->s3Uri = 'incidunt';
    $request->startSentimentDetectionJobRequest->jobName = 'sed';
    $request->startSentimentDetectionJobRequest->languageCode = LanguageCodeEnum::HI;
    $request->startSentimentDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startSentimentDetectionJobRequest->outputDataConfig->kmsKeyId = 'eius';
    $request->startSentimentDetectionJobRequest->outputDataConfig->s3Uri = 'necessitatibus';
    $request->startSentimentDetectionJobRequest->tags = [
        new Tag(),
    ];
    $request->startSentimentDetectionJobRequest->volumeKmsKeyId = 'ea';
    $request->startSentimentDetectionJobRequest->vpcConfig = new VpcConfig();
    $request->startSentimentDetectionJobRequest->vpcConfig->securityGroupIds = [
        'quos',
        'voluptatibus',
        'tempora',
    ];
    $request->startSentimentDetectionJobRequest->vpcConfig->subnets = [
        'voluptate',
        'reiciendis',
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = StartSentimentDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_SENTIMENT_DETECTION_JOB;

    $response = $sdk->sdk->startSentimentDetectionJob($request);

    if ($response->startSentimentDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTargetedSentimentDetectionJob

Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTargetedSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTargetedSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\LanguageCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartTargetedSentimentDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTargetedSentimentDetectionJobRequest();
    $request->startTargetedSentimentDetectionJobRequest = new StartTargetedSentimentDetectionJobRequest();
    $request->startTargetedSentimentDetectionJobRequest->clientRequestToken = 'incidunt';
    $request->startTargetedSentimentDetectionJobRequest->dataAccessRoleArn = 'ipsam';
    $request->startTargetedSentimentDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startTargetedSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startTargetedSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_ANALYZE_DOCUMENT;
    $request->startTargetedSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::FORCE_DOCUMENT_READ_ACTION;
    $request->startTargetedSentimentDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::FORMS,
    ];
    $request->startTargetedSentimentDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_LINE;
    $request->startTargetedSentimentDetectionJobRequest->inputDataConfig->s3Uri = 'veniam';
    $request->startTargetedSentimentDetectionJobRequest->jobName = 'minima';
    $request->startTargetedSentimentDetectionJobRequest->languageCode = LanguageCodeEnum::ZH_TW;
    $request->startTargetedSentimentDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startTargetedSentimentDetectionJobRequest->outputDataConfig->kmsKeyId = 'reiciendis';
    $request->startTargetedSentimentDetectionJobRequest->outputDataConfig->s3Uri = 'nulla';
    $request->startTargetedSentimentDetectionJobRequest->tags = [
        new Tag(),
    ];
    $request->startTargetedSentimentDetectionJobRequest->volumeKmsKeyId = 'aperiam';
    $request->startTargetedSentimentDetectionJobRequest->vpcConfig = new VpcConfig();
    $request->startTargetedSentimentDetectionJobRequest->vpcConfig->securityGroupIds = [
        'numquam',
        'veniam',
        'in',
        'officiis',
    ];
    $request->startTargetedSentimentDetectionJobRequest->vpcConfig->subnets = [
        'laudantium',
    ];
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = StartTargetedSentimentDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_TARGETED_SENTIMENT_DETECTION_JOB;

    $response = $sdk->sdk->startTargetedSentimentDetectionJob($request);

    if ($response->startTargetedSentimentDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTopicsDetectionJob

Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTopicsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTopicsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReaderConfig;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentReadFeatureTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\InputFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OutputDataConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartTopicsDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTopicsDetectionJobRequest();
    $request->startTopicsDetectionJobRequest = new StartTopicsDetectionJobRequest();
    $request->startTopicsDetectionJobRequest->clientRequestToken = 'hic';
    $request->startTopicsDetectionJobRequest->dataAccessRoleArn = 'expedita';
    $request->startTopicsDetectionJobRequest->inputDataConfig = new InputDataConfig();
    $request->startTopicsDetectionJobRequest->inputDataConfig->documentReaderConfig = new DocumentReaderConfig();
    $request->startTopicsDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadAction = DocumentReadActionEnum::TEXTRACT_ANALYZE_DOCUMENT;
    $request->startTopicsDetectionJobRequest->inputDataConfig->documentReaderConfig->documentReadMode = DocumentReadModeEnum::SERVICE_DEFAULT;
    $request->startTopicsDetectionJobRequest->inputDataConfig->documentReaderConfig->featureTypes = [
        DocumentReadFeatureTypesEnum::TABLES,
        DocumentReadFeatureTypesEnum::FORMS,
        DocumentReadFeatureTypesEnum::FORMS,
    ];
    $request->startTopicsDetectionJobRequest->inputDataConfig->inputFormat = InputFormatEnum::ONE_DOC_PER_LINE;
    $request->startTopicsDetectionJobRequest->inputDataConfig->s3Uri = 'accusamus';
    $request->startTopicsDetectionJobRequest->jobName = 'tempora';
    $request->startTopicsDetectionJobRequest->numberOfTopics = 543678;
    $request->startTopicsDetectionJobRequest->outputDataConfig = new OutputDataConfig();
    $request->startTopicsDetectionJobRequest->outputDataConfig->kmsKeyId = 'fugit';
    $request->startTopicsDetectionJobRequest->outputDataConfig->s3Uri = 'ut';
    $request->startTopicsDetectionJobRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->startTopicsDetectionJobRequest->volumeKmsKeyId = 'voluptatem';
    $request->startTopicsDetectionJobRequest->vpcConfig = new VpcConfig();
    $request->startTopicsDetectionJobRequest->vpcConfig->securityGroupIds = [
        'expedita',
        'magnam',
        'consequatur',
    ];
    $request->startTopicsDetectionJobRequest->vpcConfig->subnets = [
        'ipsam',
        'sit',
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = StartTopicsDetectionJobXAmzTargetEnum::COMPREHEND20171127_START_TOPICS_DETECTION_JOB;

    $response = $sdk->sdk->startTopicsDetectionJob($request);

    if ($response->startTopicsDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopDominantLanguageDetectionJob

<p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopDominantLanguageDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopDominantLanguageDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopDominantLanguageDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopDominantLanguageDetectionJobRequest();
    $request->stopDominantLanguageDetectionJobRequest = new StopDominantLanguageDetectionJobRequest();
    $request->stopDominantLanguageDetectionJobRequest->jobId = 'sed';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = StopDominantLanguageDetectionJobXAmzTargetEnum::COMPREHEND20171127_STOP_DOMINANT_LANGUAGE_DETECTION_JOB;

    $response = $sdk->sdk->stopDominantLanguageDetectionJob($request);

    if ($response->stopDominantLanguageDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopEntitiesDetectionJob

<p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopEntitiesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopEntitiesDetectionJobRequest();
    $request->stopEntitiesDetectionJobRequest = new StopEntitiesDetectionJobRequest();
    $request->stopEntitiesDetectionJobRequest->jobId = 'reiciendis';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = StopEntitiesDetectionJobXAmzTargetEnum::COMPREHEND20171127_STOP_ENTITIES_DETECTION_JOB;

    $response = $sdk->sdk->stopEntitiesDetectionJob($request);

    if ($response->stopEntitiesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopEventsDetectionJob

Stops an events detection job in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopEventsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopEventsDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopEventsDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopEventsDetectionJobRequest();
    $request->stopEventsDetectionJobRequest = new StopEventsDetectionJobRequest();
    $request->stopEventsDetectionJobRequest->jobId = 'atque';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = StopEventsDetectionJobXAmzTargetEnum::COMPREHEND20171127_STOP_EVENTS_DETECTION_JOB;

    $response = $sdk->sdk->stopEventsDetectionJob($request);

    if ($response->stopEventsDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopKeyPhrasesDetectionJob

<p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopKeyPhrasesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopKeyPhrasesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopKeyPhrasesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopKeyPhrasesDetectionJobRequest();
    $request->stopKeyPhrasesDetectionJobRequest = new StopKeyPhrasesDetectionJobRequest();
    $request->stopKeyPhrasesDetectionJobRequest->jobId = 'voluptate';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = StopKeyPhrasesDetectionJobXAmzTargetEnum::COMPREHEND20171127_STOP_KEY_PHRASES_DETECTION_JOB;

    $response = $sdk->sdk->stopKeyPhrasesDetectionJob($request);

    if ($response->stopKeyPhrasesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopPiiEntitiesDetectionJob

Stops a PII entities detection job in progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopPiiEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopPiiEntitiesDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopPiiEntitiesDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopPiiEntitiesDetectionJobRequest();
    $request->stopPiiEntitiesDetectionJobRequest = new StopPiiEntitiesDetectionJobRequest();
    $request->stopPiiEntitiesDetectionJobRequest->jobId = 'est';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = StopPiiEntitiesDetectionJobXAmzTargetEnum::COMPREHEND20171127_STOP_PII_ENTITIES_DETECTION_JOB;

    $response = $sdk->sdk->stopPiiEntitiesDetectionJob($request);

    if ($response->stopPiiEntitiesDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopSentimentDetectionJob

<p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopSentimentDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopSentimentDetectionJobRequest();
    $request->stopSentimentDetectionJobRequest = new StopSentimentDetectionJobRequest();
    $request->stopSentimentDetectionJobRequest->jobId = 'voluptatem';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = StopSentimentDetectionJobXAmzTargetEnum::COMPREHEND20171127_STOP_SENTIMENT_DETECTION_JOB;

    $response = $sdk->sdk->stopSentimentDetectionJob($request);

    if ($response->stopSentimentDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTargetedSentimentDetectionJob

<p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTargetedSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTargetedSentimentDetectionJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTargetedSentimentDetectionJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTargetedSentimentDetectionJobRequest();
    $request->stopTargetedSentimentDetectionJobRequest = new StopTargetedSentimentDetectionJobRequest();
    $request->stopTargetedSentimentDetectionJobRequest->jobId = 'suscipit';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = StopTargetedSentimentDetectionJobXAmzTargetEnum::COMPREHEND20171127_STOP_TARGETED_SENTIMENT_DETECTION_JOB;

    $response = $sdk->sdk->stopTargetedSentimentDetectionJob($request);

    if ($response->stopTargetedSentimentDetectionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTrainingDocumentClassifier

<p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTrainingDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTrainingDocumentClassifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTrainingDocumentClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTrainingDocumentClassifierRequest();
    $request->stopTrainingDocumentClassifierRequest = new StopTrainingDocumentClassifierRequest();
    $request->stopTrainingDocumentClassifierRequest->documentClassifierArn = 'atque';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = StopTrainingDocumentClassifierXAmzTargetEnum::COMPREHEND20171127_STOP_TRAINING_DOCUMENT_CLASSIFIER;

    $response = $sdk->sdk->stopTrainingDocumentClassifier($request);

    if ($response->stopTrainingDocumentClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTrainingEntityRecognizer

<p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTrainingEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTrainingEntityRecognizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTrainingEntityRecognizerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTrainingEntityRecognizerRequest();
    $request->stopTrainingEntityRecognizerRequest = new StopTrainingEntityRecognizerRequest();
    $request->stopTrainingEntityRecognizerRequest->entityRecognizerArn = 'ex';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = StopTrainingEntityRecognizerXAmzTargetEnum::COMPREHEND20171127_STOP_TRAINING_ENTITY_RECOGNIZER;

    $response = $sdk->sdk->stopTrainingEntityRecognizer($request);

    if ($response->stopTrainingEntityRecognizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'atque';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::COMPREHEND20171127_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a specific tag associated with an Amazon Comprehend resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'repudiandae';
    $request->untagResourceRequest->tagKeys = [
        'accusantium',
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::COMPREHEND20171127_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndpoint

Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndpointRequest();
    $request->updateEndpointRequest = new UpdateEndpointRequest();
    $request->updateEndpointRequest->desiredDataAccessRoleArn = 'magnam';
    $request->updateEndpointRequest->desiredInferenceUnits = 906355;
    $request->updateEndpointRequest->desiredModelArn = 'consequuntur';
    $request->updateEndpointRequest->endpointArn = 'occaecati';
    $request->updateEndpointRequest->flywheelArn = 'officiis';
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = UpdateEndpointXAmzTargetEnum::COMPREHEND20171127_UPDATE_ENDPOINT;

    $response = $sdk->sdk->updateEndpoint($request);

    if ($response->updateEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFlywheel

Update the configuration information for an existing flywheel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFlywheelRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDataSecurityConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlywheelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFlywheelRequest();
    $request->updateFlywheelRequest = new UpdateFlywheelRequest();
    $request->updateFlywheelRequest->activeModelArn = 'id';
    $request->updateFlywheelRequest->dataAccessRoleArn = 'quis';
    $request->updateFlywheelRequest->dataSecurityConfig = new UpdateDataSecurityConfig();
    $request->updateFlywheelRequest->dataSecurityConfig->modelKmsKeyId = 'reprehenderit';
    $request->updateFlywheelRequest->dataSecurityConfig->volumeKmsKeyId = 'error';
    $request->updateFlywheelRequest->dataSecurityConfig->vpcConfig = new VpcConfig();
    $request->updateFlywheelRequest->dataSecurityConfig->vpcConfig->securityGroupIds = [
        'corporis',
    ];
    $request->updateFlywheelRequest->dataSecurityConfig->vpcConfig->subnets = [
        'eveniet',
        'non',
        'vero',
    ];
    $request->updateFlywheelRequest->flywheelArn = 'doloremque';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UpdateFlywheelXAmzTargetEnum::COMPREHEND20171127_UPDATE_FLYWHEEL;

    $response = $sdk->sdk->updateFlywheel($request);

    if ($response->updateFlywheelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
