# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/comprehend/2017-11-27/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchDetectDominantLanguage(ctx, operations.BatchDetectDominantLanguageRequest{
        BatchDetectDominantLanguageRequest: shared.BatchDetectDominantLanguageRequest{
            TextList: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.BatchDetectDominantLanguageXAmzTargetEnumComprehend20171127BatchDetectDominantLanguage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectDominantLanguageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchDetectDominantLanguage](docs/sdk/README.md#batchdetectdominantlanguage) - Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* [BatchDetectEntities](docs/sdk/README.md#batchdetectentities) - Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. 
* [BatchDetectKeyPhrases](docs/sdk/README.md#batchdetectkeyphrases) - Detects the key noun phrases found in a batch of documents.
* [BatchDetectSentiment](docs/sdk/README.md#batchdetectsentiment) - Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
* [BatchDetectSyntax](docs/sdk/README.md#batchdetectsyntax) - Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 
* [BatchDetectTargetedSentiment](docs/sdk/README.md#batchdetecttargetedsentiment) - <p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
* [ClassifyDocument](docs/sdk/README.md#classifydocument) - <p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
* [ContainsPiiEntities](docs/sdk/README.md#containspiientities) - Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
* [CreateDataset](docs/sdk/README.md#createdataset) - Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [CreateDocumentClassifier](docs/sdk/README.md#createdocumentclassifier) - Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. 
* [CreateEndpoint](docs/sdk/README.md#createendpoint) - Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [CreateEntityRecognizer](docs/sdk/README.md#createentityrecognizer) - Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. 
* [CreateFlywheel](docs/sdk/README.md#createflywheel) - <p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
* [DeleteDocumentClassifier](docs/sdk/README.md#deletedocumentclassifier) - <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
* [DeleteEndpoint](docs/sdk/README.md#deleteendpoint) - Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [DeleteEntityRecognizer](docs/sdk/README.md#deleteentityrecognizer) - <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
* [DeleteFlywheel](docs/sdk/README.md#deleteflywheel) - <p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
* [DeleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) - Deletes a resource-based policy that is attached to a custom model.
* [DescribeDataset](docs/sdk/README.md#describedataset) - Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [DescribeDocumentClassificationJob](docs/sdk/README.md#describedocumentclassificationjob) - Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
* [DescribeDocumentClassifier](docs/sdk/README.md#describedocumentclassifier) - Gets the properties associated with a document classifier.
* [DescribeDominantLanguageDetectionJob](docs/sdk/README.md#describedominantlanguagedetectionjob) - Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
* [DescribeEndpoint](docs/sdk/README.md#describeendpoint) - Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [DescribeEntitiesDetectionJob](docs/sdk/README.md#describeentitiesdetectionjob) - Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
* [DescribeEntityRecognizer](docs/sdk/README.md#describeentityrecognizer) - Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
* [DescribeEventsDetectionJob](docs/sdk/README.md#describeeventsdetectionjob) - Gets the status and details of an events detection job.
* [DescribeFlywheel](docs/sdk/README.md#describeflywheel) - Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [DescribeFlywheelIteration](docs/sdk/README.md#describeflywheeliteration) - Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [DescribeKeyPhrasesDetectionJob](docs/sdk/README.md#describekeyphrasesdetectionjob) - Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
* [DescribePiiEntitiesDetectionJob](docs/sdk/README.md#describepiientitiesdetectionjob) - Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
* [DescribeResourcePolicy](docs/sdk/README.md#describeresourcepolicy) - Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.
* [DescribeSentimentDetectionJob](docs/sdk/README.md#describesentimentdetectionjob) - Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
* [DescribeTargetedSentimentDetectionJob](docs/sdk/README.md#describetargetedsentimentdetectionjob) - Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.
* [DescribeTopicsDetectionJob](docs/sdk/README.md#describetopicsdetectionjob) - Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
* [DetectDominantLanguage](docs/sdk/README.md#detectdominantlanguage) - Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* [DetectEntities](docs/sdk/README.md#detectentities) - <p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
* [DetectKeyPhrases](docs/sdk/README.md#detectkeyphrases) - Detects the key noun phrases found in the text. 
* [DetectPiiEntities](docs/sdk/README.md#detectpiientities) - Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
* [DetectSentiment](docs/sdk/README.md#detectsentiment) - Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 
* [DetectSyntax](docs/sdk/README.md#detectsyntax) - Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 
* [DetectTargetedSentiment](docs/sdk/README.md#detecttargetedsentiment) - <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
* [ImportModel](docs/sdk/README.md#importmodel) - <p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>
* [ListDatasets](docs/sdk/README.md#listdatasets) - List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [ListDocumentClassificationJobs](docs/sdk/README.md#listdocumentclassificationjobs) - Gets a list of the documentation classification jobs that you have submitted.
* [ListDocumentClassifierSummaries](docs/sdk/README.md#listdocumentclassifiersummaries) - Gets a list of summaries of the document classifiers that you have created
* [ListDocumentClassifiers](docs/sdk/README.md#listdocumentclassifiers) - Gets a list of the document classifiers that you have created.
* [ListDominantLanguageDetectionJobs](docs/sdk/README.md#listdominantlanguagedetectionjobs) - Gets a list of the dominant language detection jobs that you have submitted.
* [ListEndpoints](docs/sdk/README.md#listendpoints) - Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [ListEntitiesDetectionJobs](docs/sdk/README.md#listentitiesdetectionjobs) - Gets a list of the entity detection jobs that you have submitted.
* [ListEntityRecognizerSummaries](docs/sdk/README.md#listentityrecognizersummaries) - Gets a list of summaries for the entity recognizers that you have created.
* [ListEntityRecognizers](docs/sdk/README.md#listentityrecognizers) - <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
* [ListEventsDetectionJobs](docs/sdk/README.md#listeventsdetectionjobs) - Gets a list of the events detection jobs that you have submitted.
* [ListFlywheelIterationHistory](docs/sdk/README.md#listflywheeliterationhistory) - Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [ListFlywheels](docs/sdk/README.md#listflywheels) - Gets a list of the flywheels that you have created.
* [ListKeyPhrasesDetectionJobs](docs/sdk/README.md#listkeyphrasesdetectionjobs) - Get a list of key phrase detection jobs that you have submitted.
* [ListPiiEntitiesDetectionJobs](docs/sdk/README.md#listpiientitiesdetectionjobs) - Gets a list of the PII entity detection jobs that you have submitted.
* [ListSentimentDetectionJobs](docs/sdk/README.md#listsentimentdetectionjobs) - Gets a list of sentiment detection jobs that you have submitted.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags associated with a given Amazon Comprehend resource. 
* [ListTargetedSentimentDetectionJobs](docs/sdk/README.md#listtargetedsentimentdetectionjobs) - Gets a list of targeted sentiment detection jobs that you have submitted.
* [ListTopicsDetectionJobs](docs/sdk/README.md#listtopicsdetectionjobs) - Gets a list of the topic detection jobs that you have submitted.
* [PutResourcePolicy](docs/sdk/README.md#putresourcepolicy) - Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.
* [StartDocumentClassificationJob](docs/sdk/README.md#startdocumentclassificationjob) - Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.
* [StartDominantLanguageDetectionJob](docs/sdk/README.md#startdominantlanguagedetectionjob) - Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
* [StartEntitiesDetectionJob](docs/sdk/README.md#startentitiesdetectionjob) - <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
* [StartEventsDetectionJob](docs/sdk/README.md#starteventsdetectionjob) - Starts an asynchronous event detection job for a collection of documents.
* [StartFlywheelIteration](docs/sdk/README.md#startflywheeliteration) - Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [StartKeyPhrasesDetectionJob](docs/sdk/README.md#startkeyphrasesdetectionjob) - Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
* [StartPiiEntitiesDetectionJob](docs/sdk/README.md#startpiientitiesdetectionjob) - Starts an asynchronous PII entity detection job for a collection of documents.
* [StartSentimentDetectionJob](docs/sdk/README.md#startsentimentdetectionjob) - Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.
* [StartTargetedSentimentDetectionJob](docs/sdk/README.md#starttargetedsentimentdetectionjob) - Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.
* [StartTopicsDetectionJob](docs/sdk/README.md#starttopicsdetectionjob) - Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
* [StopDominantLanguageDetectionJob](docs/sdk/README.md#stopdominantlanguagedetectionjob) - <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopEntitiesDetectionJob](docs/sdk/README.md#stopentitiesdetectionjob) - <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopEventsDetectionJob](docs/sdk/README.md#stopeventsdetectionjob) - Stops an events detection job in progress.
* [StopKeyPhrasesDetectionJob](docs/sdk/README.md#stopkeyphrasesdetectionjob) - <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopPiiEntitiesDetectionJob](docs/sdk/README.md#stoppiientitiesdetectionjob) - Stops a PII entities detection job in progress.
* [StopSentimentDetectionJob](docs/sdk/README.md#stopsentimentdetectionjob) - <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopTargetedSentimentDetectionJob](docs/sdk/README.md#stoptargetedsentimentdetectionjob) - <p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopTrainingDocumentClassifier](docs/sdk/README.md#stoptrainingdocumentclassifier) - <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
* [StopTrainingEntityRecognizer](docs/sdk/README.md#stoptrainingentityrecognizer) - <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
* [TagResource](docs/sdk/README.md#tagresource) - Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
* [UntagResource](docs/sdk/README.md#untagresource) - Removes a specific tag associated with an Amazon Comprehend resource. 
* [UpdateEndpoint](docs/sdk/README.md#updateendpoint) - Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [UpdateFlywheel](docs/sdk/README.md#updateflywheel) - Update the configuration information for an existing flywheel.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
