# SDK

## Overview

Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more.

Amazon Web Services documentation
<https://docs.aws.amazon.com/comprehend/>
### Available Operations

* [BatchDetectDominantLanguage](#batchdetectdominantlanguage) - Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* [BatchDetectEntities](#batchdetectentities) - Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. 
* [BatchDetectKeyPhrases](#batchdetectkeyphrases) - Detects the key noun phrases found in a batch of documents.
* [BatchDetectSentiment](#batchdetectsentiment) - Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
* [BatchDetectSyntax](#batchdetectsyntax) - Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 
* [BatchDetectTargetedSentiment](#batchdetecttargetedsentiment) - <p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
* [ClassifyDocument](#classifydocument) - <p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
* [ContainsPiiEntities](#containspiientities) - Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
* [CreateDataset](#createdataset) - Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [CreateDocumentClassifier](#createdocumentclassifier) - Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. 
* [CreateEndpoint](#createendpoint) - Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [CreateEntityRecognizer](#createentityrecognizer) - Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. 
* [CreateFlywheel](#createflywheel) - <p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
* [DeleteDocumentClassifier](#deletedocumentclassifier) - <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
* [DeleteEndpoint](#deleteendpoint) - Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [DeleteEntityRecognizer](#deleteentityrecognizer) - <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
* [DeleteFlywheel](#deleteflywheel) - <p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource-based policy that is attached to a custom model.
* [DescribeDataset](#describedataset) - Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [DescribeDocumentClassificationJob](#describedocumentclassificationjob) - Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
* [DescribeDocumentClassifier](#describedocumentclassifier) - Gets the properties associated with a document classifier.
* [DescribeDominantLanguageDetectionJob](#describedominantlanguagedetectionjob) - Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
* [DescribeEndpoint](#describeendpoint) - Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [DescribeEntitiesDetectionJob](#describeentitiesdetectionjob) - Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
* [DescribeEntityRecognizer](#describeentityrecognizer) - Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
* [DescribeEventsDetectionJob](#describeeventsdetectionjob) - Gets the status and details of an events detection job.
* [DescribeFlywheel](#describeflywheel) - Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [DescribeFlywheelIteration](#describeflywheeliteration) - Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [DescribeKeyPhrasesDetectionJob](#describekeyphrasesdetectionjob) - Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
* [DescribePiiEntitiesDetectionJob](#describepiientitiesdetectionjob) - Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
* [DescribeResourcePolicy](#describeresourcepolicy) - Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.
* [DescribeSentimentDetectionJob](#describesentimentdetectionjob) - Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
* [DescribeTargetedSentimentDetectionJob](#describetargetedsentimentdetectionjob) - Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.
* [DescribeTopicsDetectionJob](#describetopicsdetectionjob) - Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
* [DetectDominantLanguage](#detectdominantlanguage) - Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* [DetectEntities](#detectentities) - <p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
* [DetectKeyPhrases](#detectkeyphrases) - Detects the key noun phrases found in the text. 
* [DetectPiiEntities](#detectpiientities) - Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
* [DetectSentiment](#detectsentiment) - Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 
* [DetectSyntax](#detectsyntax) - Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 
* [DetectTargetedSentiment](#detecttargetedsentiment) - <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
* [ImportModel](#importmodel) - <p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>
* [ListDatasets](#listdatasets) - List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [ListDocumentClassificationJobs](#listdocumentclassificationjobs) - Gets a list of the documentation classification jobs that you have submitted.
* [ListDocumentClassifierSummaries](#listdocumentclassifiersummaries) - Gets a list of summaries of the document classifiers that you have created
* [ListDocumentClassifiers](#listdocumentclassifiers) - Gets a list of the document classifiers that you have created.
* [ListDominantLanguageDetectionJobs](#listdominantlanguagedetectionjobs) - Gets a list of the dominant language detection jobs that you have submitted.
* [ListEndpoints](#listendpoints) - Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [ListEntitiesDetectionJobs](#listentitiesdetectionjobs) - Gets a list of the entity detection jobs that you have submitted.
* [ListEntityRecognizerSummaries](#listentityrecognizersummaries) - Gets a list of summaries for the entity recognizers that you have created.
* [ListEntityRecognizers](#listentityrecognizers) - <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
* [ListEventsDetectionJobs](#listeventsdetectionjobs) - Gets a list of the events detection jobs that you have submitted.
* [ListFlywheelIterationHistory](#listflywheeliterationhistory) - Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [ListFlywheels](#listflywheels) - Gets a list of the flywheels that you have created.
* [ListKeyPhrasesDetectionJobs](#listkeyphrasesdetectionjobs) - Get a list of key phrase detection jobs that you have submitted.
* [ListPiiEntitiesDetectionJobs](#listpiientitiesdetectionjobs) - Gets a list of the PII entity detection jobs that you have submitted.
* [ListSentimentDetectionJobs](#listsentimentdetectionjobs) - Gets a list of sentiment detection jobs that you have submitted.
* [ListTagsForResource](#listtagsforresource) - Lists all tags associated with a given Amazon Comprehend resource. 
* [ListTargetedSentimentDetectionJobs](#listtargetedsentimentdetectionjobs) - Gets a list of targeted sentiment detection jobs that you have submitted.
* [ListTopicsDetectionJobs](#listtopicsdetectionjobs) - Gets a list of the topic detection jobs that you have submitted.
* [PutResourcePolicy](#putresourcepolicy) - Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.
* [StartDocumentClassificationJob](#startdocumentclassificationjob) - Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.
* [StartDominantLanguageDetectionJob](#startdominantlanguagedetectionjob) - Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
* [StartEntitiesDetectionJob](#startentitiesdetectionjob) - <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
* [StartEventsDetectionJob](#starteventsdetectionjob) - Starts an asynchronous event detection job for a collection of documents.
* [StartFlywheelIteration](#startflywheeliteration) - Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
* [StartKeyPhrasesDetectionJob](#startkeyphrasesdetectionjob) - Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
* [StartPiiEntitiesDetectionJob](#startpiientitiesdetectionjob) - Starts an asynchronous PII entity detection job for a collection of documents.
* [StartSentimentDetectionJob](#startsentimentdetectionjob) - Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.
* [StartTargetedSentimentDetectionJob](#starttargetedsentimentdetectionjob) - Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.
* [StartTopicsDetectionJob](#starttopicsdetectionjob) - Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
* [StopDominantLanguageDetectionJob](#stopdominantlanguagedetectionjob) - <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopEntitiesDetectionJob](#stopentitiesdetectionjob) - <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopEventsDetectionJob](#stopeventsdetectionjob) - Stops an events detection job in progress.
* [StopKeyPhrasesDetectionJob](#stopkeyphrasesdetectionjob) - <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopPiiEntitiesDetectionJob](#stoppiientitiesdetectionjob) - Stops a PII entities detection job in progress.
* [StopSentimentDetectionJob](#stopsentimentdetectionjob) - <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopTargetedSentimentDetectionJob](#stoptargetedsentimentdetectionjob) - <p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* [StopTrainingDocumentClassifier](#stoptrainingdocumentclassifier) - <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
* [StopTrainingEntityRecognizer](#stoptrainingentityrecognizer) - <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
* [TagResource](#tagresource) - Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
* [UntagResource](#untagresource) - Removes a specific tag associated with an Amazon Comprehend resource. 
* [UpdateEndpoint](#updateendpoint) - Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
* [UpdateFlywheel](#updateflywheel) - Update the configuration information for an existing flywheel.

## BatchDetectDominantLanguage

Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 

### Example Usage

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
    res, err := s.SDK.BatchDetectDominantLanguage(ctx, operations.BatchDetectDominantLanguageRequest{
        BatchDetectDominantLanguageRequest: shared.BatchDetectDominantLanguageRequest{
            TextList: []string{
                "iure",
                "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
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

## BatchDetectEntities

Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide. 

### Example Usage

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
    res, err := s.SDK.BatchDetectEntities(ctx, operations.BatchDetectEntitiesRequest{
        BatchDetectEntitiesRequest: shared.BatchDetectEntitiesRequest{
            LanguageCode: shared.LanguageCodeEnumKo,
            TextList: []string{
                "iusto",
                "excepturi",
                "nisi",
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.BatchDetectEntitiesXAmzTargetEnumComprehend20171127BatchDetectEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectEntitiesResponse != nil {
        // handle response
    }
}
```

## BatchDetectKeyPhrases

Detects the key noun phrases found in a batch of documents.

### Example Usage

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
    res, err := s.SDK.BatchDetectKeyPhrases(ctx, operations.BatchDetectKeyPhrasesRequest{
        BatchDetectKeyPhrasesRequest: shared.BatchDetectKeyPhrasesRequest{
            LanguageCode: shared.LanguageCodeEnumIt,
            TextList: []string{
                "sapiente",
                "quo",
                "odit",
                "at",
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.BatchDetectKeyPhrasesXAmzTargetEnumComprehend20171127BatchDetectKeyPhrases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectKeyPhrasesResponse != nil {
        // handle response
    }
}
```

## BatchDetectSentiment

Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.

### Example Usage

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
    res, err := s.SDK.BatchDetectSentiment(ctx, operations.BatchDetectSentimentRequest{
        BatchDetectSentimentRequest: shared.BatchDetectSentimentRequest{
            LanguageCode: shared.LanguageCodeEnumKo,
            TextList: []string{
                "dicta",
                "nam",
                "officia",
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.BatchDetectSentimentXAmzTargetEnumComprehend20171127BatchDetectSentiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectSentimentResponse != nil {
        // handle response
    }
}
```

## BatchDetectSyntax

Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

### Example Usage

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
    res, err := s.SDK.BatchDetectSyntax(ctx, operations.BatchDetectSyntaxRequest{
        BatchDetectSyntaxRequest: shared.BatchDetectSyntaxRequest{
            LanguageCode: shared.SyntaxLanguageCodeEnumFr,
            TextList: []string{
                "modi",
                "qui",
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.BatchDetectSyntaxXAmzTargetEnumComprehend20171127BatchDetectSyntax,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectSyntaxResponse != nil {
        // handle response
    }
}
```

## BatchDetectTargetedSentiment

<p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Example Usage

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
    res, err := s.SDK.BatchDetectTargetedSentiment(ctx, operations.BatchDetectTargetedSentimentRequest{
        BatchDetectTargetedSentimentRequest: shared.BatchDetectTargetedSentimentRequest{
            LanguageCode: shared.LanguageCodeEnumDe,
            TextList: []string{
                "sed",
                "iste",
                "dolor",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.BatchDetectTargetedSentimentXAmzTargetEnumComprehend20171127BatchDetectTargetedSentiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectTargetedSentimentResponse != nil {
        // handle response
    }
}
```

## ClassifyDocument

<p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

### Example Usage

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
    res, err := s.SDK.ClassifyDocument(ctx, operations.ClassifyDocumentRequest{
        ClassifyDocumentRequest: shared.ClassifyDocumentRequest{
            Bytes: sdk.String("iste"),
            DocumentReaderConfig: &shared.DocumentReaderConfig{
                DocumentReadAction: shared.DocumentReadActionEnumTextractDetectDocumentText,
                DocumentReadMode: shared.DocumentReadModeEnumForceDocumentReadAction.ToPointer(),
                FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                    shared.DocumentReadFeatureTypesEnumTables,
                    shared.DocumentReadFeatureTypesEnumTables,
                    shared.DocumentReadFeatureTypesEnumForms,
                },
            },
            EndpointArn: "est",
            Text: sdk.String("mollitia"),
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.ClassifyDocumentXAmzTargetEnumComprehend20171127ClassifyDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClassifyDocumentResponse != nil {
        // handle response
    }
}
```

## ContainsPiiEntities

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

### Example Usage

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
    res, err := s.SDK.ContainsPiiEntities(ctx, operations.ContainsPiiEntitiesRequest{
        ContainsPiiEntitiesRequest: shared.ContainsPiiEntitiesRequest{
            LanguageCode: shared.LanguageCodeEnumHi,
            Text: "nemo",
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ContainsPiiEntitiesXAmzTargetEnumComprehend20171127ContainsPiiEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainsPiiEntitiesResponse != nil {
        // handle response
    }
}
```

## CreateDataset

Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

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
    res, err := s.SDK.CreateDataset(ctx, operations.CreateDatasetRequest{
        CreateDatasetRequest: shared.CreateDatasetRequest{
            ClientRequestToken: sdk.String("architecto"),
            DatasetName: "mollitia",
            DatasetType: shared.DatasetTypeEnumTrain.ToPointer(),
            Description: sdk.String("culpa"),
            FlywheelArn: "consequuntur",
            InputDataConfig: shared.DatasetInputDataConfig{
                AugmentedManifests: []shared.DatasetAugmentedManifestsListItem{
                    shared.DatasetAugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("mollitia"),
                        AttributeNames: []string{
                            "numquam",
                            "commodi",
                            "quam",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumPlainTextDocument.ToPointer(),
                        S3URI: "velit",
                        SourceDocumentsS3URI: sdk.String("error"),
                    },
                    shared.DatasetAugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("quia"),
                        AttributeNames: []string{
                            "vitae",
                            "laborum",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumSemiStructuredDocument.ToPointer(),
                        S3URI: "enim",
                        SourceDocumentsS3URI: sdk.String("odit"),
                    },
                    shared.DatasetAugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("quo"),
                        AttributeNames: []string{
                            "tenetur",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumPlainTextDocument.ToPointer(),
                        S3URI: "id",
                        SourceDocumentsS3URI: sdk.String("possimus"),
                    },
                    shared.DatasetAugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("aut"),
                        AttributeNames: []string{
                            "error",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumSemiStructuredDocument.ToPointer(),
                        S3URI: "laborum",
                        SourceDocumentsS3URI: sdk.String("quasi"),
                    },
                },
                DataFormat: shared.DatasetDataFormatEnumAugmentedManifest.ToPointer(),
                DocumentClassifierInputDataConfig: &shared.DatasetDocumentClassifierInputDataConfig{
                    LabelDelimiter: sdk.String("voluptatibus"),
                    S3URI: "vero",
                },
                EntityRecognizerInputDataConfig: &shared.DatasetEntityRecognizerInputDataConfig{
                    Annotations: &shared.DatasetEntityRecognizerAnnotations{
                        S3URI: "nihil",
                    },
                    Documents: shared.DatasetEntityRecognizerDocuments{
                        InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                        S3URI: "voluptatibus",
                    },
                    EntityList: &shared.DatasetEntityRecognizerEntityList{
                        S3URI: "ipsa",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptate",
                    Value: sdk.String("cum"),
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: sdk.String("doloremque"),
                },
                shared.Tag{
                    Key: "reprehenderit",
                    Value: sdk.String("ut"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.CreateDatasetXAmzTargetEnumComprehend20171127CreateDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
}
```

## CreateDocumentClassifier

Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide. 

### Example Usage

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
    res, err := s.SDK.CreateDocumentClassifier(ctx, operations.CreateDocumentClassifierRequest{
        CreateDocumentClassifierRequest: shared.CreateDocumentClassifierRequest{
            ClientRequestToken: sdk.String("enim"),
            DataAccessRoleArn: "accusamus",
            DocumentClassifierName: "commodi",
            InputDataConfig: shared.DocumentClassifierInputDataConfig{
                AugmentedManifests: []shared.AugmentedManifestsListItem{
                    shared.AugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("quae"),
                        AttributeNames: []string{
                            "quidem",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumSemiStructuredDocument.ToPointer(),
                        S3URI: "excepturi",
                        SourceDocumentsS3URI: sdk.String("pariatur"),
                        Split: shared.SplitEnumTrain.ToPointer(),
                    },
                    shared.AugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("praesentium"),
                        AttributeNames: []string{
                            "voluptates",
                            "quasi",
                            "repudiandae",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumSemiStructuredDocument.ToPointer(),
                        S3URI: "veritatis",
                        SourceDocumentsS3URI: sdk.String("itaque"),
                        Split: shared.SplitEnumTrain.ToPointer(),
                    },
                    shared.AugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("enim"),
                        AttributeNames: []string{
                            "est",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumSemiStructuredDocument.ToPointer(),
                        S3URI: "explicabo",
                        SourceDocumentsS3URI: sdk.String("deserunt"),
                        Split: shared.SplitEnumTest.ToPointer(),
                    },
                    shared.AugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("quibusdam"),
                        AttributeNames: []string{
                            "modi",
                            "qui",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumPlainTextDocument.ToPointer(),
                        S3URI: "cupiditate",
                        SourceDocumentsS3URI: sdk.String("quos"),
                        Split: shared.SplitEnumTrain.ToPointer(),
                    },
                },
                DataFormat: shared.DocumentClassifierDataFormatEnumComprehendCsv.ToPointer(),
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractAnalyzeDocument,
                    DocumentReadMode: shared.DocumentReadModeEnumServiceDefault.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumTables,
                    },
                },
                DocumentType: shared.DocumentClassifierDocumentTypeFormatEnumSemiStructuredDocument.ToPointer(),
                Documents: &shared.DocumentClassifierDocuments{
                    S3URI: "excepturi",
                    TestS3URI: sdk.String("tempora"),
                },
                LabelDelimiter: sdk.String("facilis"),
                S3URI: sdk.String("tempore"),
                TestS3URI: sdk.String("labore"),
            },
            LanguageCode: shared.LanguageCodeEnumZhTw,
            Mode: shared.DocumentClassifierModeEnumMultiClass.ToPointer(),
            ModelKmsKeyID: sdk.String("non"),
            ModelPolicy: sdk.String("eligendi"),
            OutputDataConfig: &shared.DocumentClassifierOutputDataConfig{
                FlywheelStatsS3Prefix: sdk.String("sint"),
                KmsKeyID: sdk.String("aliquid"),
                S3URI: sdk.String("provident"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sint",
                    Value: sdk.String("officia"),
                },
                shared.Tag{
                    Key: "dolor",
                    Value: sdk.String("debitis"),
                },
                shared.Tag{
                    Key: "a",
                    Value: sdk.String("dolorum"),
                },
                shared.Tag{
                    Key: "in",
                    Value: sdk.String("in"),
                },
            },
            VersionName: sdk.String("illum"),
            VolumeKmsKeyID: sdk.String("maiores"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "dicta",
                    "magnam",
                    "cumque",
                },
                Subnets: []string{
                    "ea",
                    "aliquid",
                    "laborum",
                    "accusamus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.CreateDocumentClassifierXAmzTargetEnumComprehend20171127CreateDocumentClassifier,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDocumentClassifierResponse != nil {
        // handle response
    }
}
```

## CreateEndpoint

Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

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
    res, err := s.SDK.CreateEndpoint(ctx, operations.CreateEndpointRequest{
        CreateEndpointRequest: shared.CreateEndpointRequest{
            ClientRequestToken: sdk.String("nam"),
            DataAccessRoleArn: sdk.String("id"),
            DesiredInferenceUnits: 501324,
            EndpointName: "deleniti",
            FlywheelArn: sdk.String("sapiente"),
            ModelArn: sdk.String("amet"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nisi",
                    Value: sdk.String("vel"),
                },
                shared.Tag{
                    Key: "natus",
                    Value: sdk.String("omnis"),
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: sdk.String("perferendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.CreateEndpointXAmzTargetEnumComprehend20171127CreateEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEndpointResponse != nil {
        // handle response
    }
}
```

## CreateEntityRecognizer

Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API. 

### Example Usage

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
    res, err := s.SDK.CreateEntityRecognizer(ctx, operations.CreateEntityRecognizerRequest{
        CreateEntityRecognizerRequest: shared.CreateEntityRecognizerRequest{
            ClientRequestToken: sdk.String("natus"),
            DataAccessRoleArn: "nobis",
            InputDataConfig: shared.EntityRecognizerInputDataConfig{
                Annotations: &shared.EntityRecognizerAnnotations{
                    S3URI: "eum",
                    TestS3URI: sdk.String("vero"),
                },
                AugmentedManifests: []shared.AugmentedManifestsListItem{
                    shared.AugmentedManifestsListItem{
                        AnnotationDataS3URI: sdk.String("architecto"),
                        AttributeNames: []string{
                            "et",
                            "excepturi",
                        },
                        DocumentType: shared.AugmentedManifestsDocumentTypeFormatEnumPlainTextDocument.ToPointer(),
                        S3URI: "provident",
                        SourceDocumentsS3URI: sdk.String("quos"),
                        Split: shared.SplitEnumTest.ToPointer(),
                    },
                },
                DataFormat: shared.EntityRecognizerDataFormatEnumComprehendCsv.ToPointer(),
                Documents: &shared.EntityRecognizerDocuments{
                    InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                    S3URI: "reiciendis",
                    TestS3URI: sdk.String("mollitia"),
                },
                EntityList: &shared.EntityRecognizerEntityList{
                    S3URI: "ad",
                },
                EntityTypes: []shared.EntityTypesListItem{
                    shared.EntityTypesListItem{
                        Type: "dolor",
                    },
                    shared.EntityTypesListItem{
                        Type: "necessitatibus",
                    },
                },
            },
            LanguageCode: shared.LanguageCodeEnumEs,
            ModelKmsKeyID: sdk.String("nemo"),
            ModelPolicy: sdk.String("quasi"),
            RecognizerName: "iure",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "debitis",
                    Value: sdk.String("eius"),
                },
                shared.Tag{
                    Key: "maxime",
                    Value: sdk.String("deleniti"),
                },
                shared.Tag{
                    Key: "facilis",
                    Value: sdk.String("in"),
                },
                shared.Tag{
                    Key: "architecto",
                    Value: sdk.String("architecto"),
                },
            },
            VersionName: sdk.String("repudiandae"),
            VolumeKmsKeyID: sdk.String("ullam"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "nihil",
                    "repellat",
                    "quibusdam",
                },
                Subnets: []string{
                    "saepe",
                },
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.CreateEntityRecognizerXAmzTargetEnumComprehend20171127CreateEntityRecognizer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEntityRecognizerResponse != nil {
        // handle response
    }
}
```

## CreateFlywheel

<p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateFlywheel(ctx, operations.CreateFlywheelRequest{
        CreateFlywheelRequest: shared.CreateFlywheelRequest{
            ActiveModelArn: sdk.String("quo"),
            ClientRequestToken: sdk.String("illum"),
            DataAccessRoleArn: "pariatur",
            DataLakeS3URI: "maxime",
            DataSecurityConfig: &shared.DataSecurityConfig{
                DataLakeKmsKeyID: sdk.String("ea"),
                ModelKmsKeyID: sdk.String("excepturi"),
                VolumeKmsKeyID: sdk.String("odit"),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "accusantium",
                        "ab",
                    },
                    Subnets: []string{
                        "quidem",
                        "ipsam",
                        "voluptate",
                        "autem",
                    },
                },
            },
            FlywheelName: "nam",
            ModelType: shared.ModelTypeEnumDocumentClassifier.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nemo",
                    Value: sdk.String("voluptatibus"),
                },
                shared.Tag{
                    Key: "perferendis",
                    Value: sdk.String("fugiat"),
                },
                shared.Tag{
                    Key: "amet",
                    Value: sdk.String("aut"),
                },
                shared.Tag{
                    Key: "cumque",
                    Value: sdk.String("corporis"),
                },
            },
            TaskConfig: &shared.TaskConfig{
                DocumentClassificationConfig: &shared.DocumentClassificationConfig{
                    Labels: []string{
                        "libero",
                        "nobis",
                        "dolores",
                        "quis",
                    },
                    Mode: shared.DocumentClassifierModeEnumMultiLabel,
                },
                EntityRecognitionConfig: &shared.EntityRecognitionConfig{
                    EntityTypes: []shared.EntityTypesListItem{
                        shared.EntityTypesListItem{
                            Type: "eaque",
                        },
                        shared.EntityTypesListItem{
                            Type: "quis",
                        },
                    },
                },
                LanguageCode: shared.LanguageCodeEnumFr,
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.CreateFlywheelXAmzTargetEnumComprehend20171127CreateFlywheel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFlywheelResponse != nil {
        // handle response
    }
}
```

## DeleteDocumentClassifier

<p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>

### Example Usage

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
    res, err := s.SDK.DeleteDocumentClassifier(ctx, operations.DeleteDocumentClassifierRequest{
        DeleteDocumentClassifierRequest: shared.DeleteDocumentClassifierRequest{
            DocumentClassifierArn: "nostrum",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DeleteDocumentClassifierXAmzTargetEnumComprehend20171127DeleteDocumentClassifier,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDocumentClassifierResponse != nil {
        // handle response
    }
}
```

## DeleteEndpoint

Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

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
    res, err := s.SDK.DeleteEndpoint(ctx, operations.DeleteEndpointRequest{
        DeleteEndpointRequest: shared.DeleteEndpointRequest{
            EndpointArn: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteEndpointXAmzTargetEnumComprehend20171127DeleteEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEndpointResponse != nil {
        // handle response
    }
}
```

## DeleteEntityRecognizer

<p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>

### Example Usage

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
    res, err := s.SDK.DeleteEntityRecognizer(ctx, operations.DeleteEntityRecognizerRequest{
        DeleteEntityRecognizerRequest: shared.DeleteEntityRecognizerRequest{
            EntityRecognizerArn: "earum",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DeleteEntityRecognizerXAmzTargetEnumComprehend20171127DeleteEntityRecognizer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEntityRecognizerResponse != nil {
        // handle response
    }
}
```

## DeleteFlywheel

<p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.DeleteFlywheel(ctx, operations.DeleteFlywheelRequest{
        DeleteFlywheelRequest: shared.DeleteFlywheelRequest{
            FlywheelArn: "libero",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DeleteFlywheelXAmzTargetEnumComprehend20171127DeleteFlywheel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFlywheelResponse != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes a resource-based policy that is attached to a custom model.

### Example Usage

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        DeleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest{
            PolicyRevisionID: sdk.String("qui"),
            ResourceArn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.DeleteResourcePolicyXAmzTargetEnumComprehend20171127DeleteResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DescribeDataset

Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

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
    res, err := s.SDK.DescribeDataset(ctx, operations.DescribeDatasetRequest{
        DescribeDatasetRequest: shared.DescribeDatasetRequest{
            DatasetArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DescribeDatasetXAmzTargetEnumComprehend20171127DescribeDataset,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDatasetResponse != nil {
        // handle response
    }
}
```

## DescribeDocumentClassificationJob

Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.

### Example Usage

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
    res, err := s.SDK.DescribeDocumentClassificationJob(ctx, operations.DescribeDocumentClassificationJobRequest{
        DescribeDocumentClassificationJobRequest: shared.DescribeDocumentClassificationJobRequest{
            JobID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.DescribeDocumentClassificationJobXAmzTargetEnumComprehend20171127DescribeDocumentClassificationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDocumentClassificationJobResponse != nil {
        // handle response
    }
}
```

## DescribeDocumentClassifier

Gets the properties associated with a document classifier.

### Example Usage

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
    res, err := s.SDK.DescribeDocumentClassifier(ctx, operations.DescribeDocumentClassifierRequest{
        DescribeDocumentClassifierRequest: shared.DescribeDocumentClassifierRequest{
            DocumentClassifierArn: "fugiat",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeDocumentClassifierXAmzTargetEnumComprehend20171127DescribeDocumentClassifier,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDocumentClassifierResponse != nil {
        // handle response
    }
}
```

## DescribeDominantLanguageDetectionJob

Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.

### Example Usage

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
    res, err := s.SDK.DescribeDominantLanguageDetectionJob(ctx, operations.DescribeDominantLanguageDetectionJobRequest{
        DescribeDominantLanguageDetectionJobRequest: shared.DescribeDominantLanguageDetectionJobRequest{
            JobID: "omnis",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DescribeDominantLanguageDetectionJobXAmzTargetEnumComprehend20171127DescribeDominantLanguageDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDominantLanguageDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribeEndpoint

Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

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
    res, err := s.SDK.DescribeEndpoint(ctx, operations.DescribeEndpointRequest{
        DescribeEndpointRequest: shared.DescribeEndpointRequest{
            EndpointArn: "saepe",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.DescribeEndpointXAmzTargetEnumComprehend20171127DescribeEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointResponse != nil {
        // handle response
    }
}
```

## DescribeEntitiesDetectionJob

Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.

### Example Usage

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
    res, err := s.SDK.DescribeEntitiesDetectionJob(ctx, operations.DescribeEntitiesDetectionJobRequest{
        DescribeEntitiesDetectionJobRequest: shared.DescribeEntitiesDetectionJobRequest{
            JobID: "saepe",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.DescribeEntitiesDetectionJobXAmzTargetEnumComprehend20171127DescribeEntitiesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntitiesDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribeEntityRecognizer

Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.

### Example Usage

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
    res, err := s.SDK.DescribeEntityRecognizer(ctx, operations.DescribeEntityRecognizerRequest{
        DescribeEntityRecognizerRequest: shared.DescribeEntityRecognizerRequest{
            EntityRecognizerArn: "alias",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DescribeEntityRecognizerXAmzTargetEnumComprehend20171127DescribeEntityRecognizer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEntityRecognizerResponse != nil {
        // handle response
    }
}
```

## DescribeEventsDetectionJob

Gets the status and details of an events detection job.

### Example Usage

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
    res, err := s.SDK.DescribeEventsDetectionJob(ctx, operations.DescribeEventsDetectionJobRequest{
        DescribeEventsDetectionJobRequest: shared.DescribeEventsDetectionJobRequest{
            JobID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.DescribeEventsDetectionJobXAmzTargetEnumComprehend20171127DescribeEventsDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventsDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribeFlywheel

Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

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
    res, err := s.SDK.DescribeFlywheel(ctx, operations.DescribeFlywheelRequest{
        DescribeFlywheelRequest: shared.DescribeFlywheelRequest{
            FlywheelArn: "amet",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DescribeFlywheelXAmzTargetEnumComprehend20171127DescribeFlywheel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFlywheelResponse != nil {
        // handle response
    }
}
```

## DescribeFlywheelIteration

Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

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
    res, err := s.SDK.DescribeFlywheelIteration(ctx, operations.DescribeFlywheelIterationRequest{
        DescribeFlywheelIterationRequest: shared.DescribeFlywheelIterationRequest{
            FlywheelArn: "nihil",
            FlywheelIterationID: "sit",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DescribeFlywheelIterationXAmzTargetEnumComprehend20171127DescribeFlywheelIteration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFlywheelIterationResponse != nil {
        // handle response
    }
}
```

## DescribeKeyPhrasesDetectionJob

Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.

### Example Usage

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
    res, err := s.SDK.DescribeKeyPhrasesDetectionJob(ctx, operations.DescribeKeyPhrasesDetectionJobRequest{
        DescribeKeyPhrasesDetectionJobRequest: shared.DescribeKeyPhrasesDetectionJobRequest{
            JobID: "quam",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DescribeKeyPhrasesDetectionJobXAmzTargetEnumComprehend20171127DescribeKeyPhrasesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeKeyPhrasesDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribePiiEntitiesDetectionJob

Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.

### Example Usage

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
    res, err := s.SDK.DescribePiiEntitiesDetectionJob(ctx, operations.DescribePiiEntitiesDetectionJobRequest{
        DescribePiiEntitiesDetectionJobRequest: shared.DescribePiiEntitiesDetectionJobRequest{
            JobID: "dicta",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribePiiEntitiesDetectionJobXAmzTargetEnumComprehend20171127DescribePiiEntitiesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribePiiEntitiesDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribeResourcePolicy

Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.

### Example Usage

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
    res, err := s.SDK.DescribeResourcePolicy(ctx, operations.DescribeResourcePolicyRequest{
        DescribeResourcePolicyRequest: shared.DescribeResourcePolicyRequest{
            ResourceArn: "aliquid",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DescribeResourcePolicyXAmzTargetEnumComprehend20171127DescribeResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DescribeSentimentDetectionJob

Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.

### Example Usage

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
    res, err := s.SDK.DescribeSentimentDetectionJob(ctx, operations.DescribeSentimentDetectionJobRequest{
        DescribeSentimentDetectionJobRequest: shared.DescribeSentimentDetectionJobRequest{
            JobID: "odio",
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DescribeSentimentDetectionJobXAmzTargetEnumComprehend20171127DescribeSentimentDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSentimentDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribeTargetedSentimentDetectionJob

Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.

### Example Usage

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
    res, err := s.SDK.DescribeTargetedSentimentDetectionJob(ctx, operations.DescribeTargetedSentimentDetectionJobRequest{
        DescribeTargetedSentimentDetectionJobRequest: shared.DescribeTargetedSentimentDetectionJobRequest{
            JobID: "nobis",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.DescribeTargetedSentimentDetectionJobXAmzTargetEnumComprehend20171127DescribeTargetedSentimentDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTargetedSentimentDetectionJobResponse != nil {
        // handle response
    }
}
```

## DescribeTopicsDetectionJob

Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.

### Example Usage

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
    res, err := s.SDK.DescribeTopicsDetectionJob(ctx, operations.DescribeTopicsDetectionJobRequest{
        DescribeTopicsDetectionJobRequest: shared.DescribeTopicsDetectionJobRequest{
            JobID: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeTopicsDetectionJobXAmzTargetEnumComprehend20171127DescribeTopicsDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTopicsDetectionJobResponse != nil {
        // handle response
    }
}
```

## DetectDominantLanguage

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 

### Example Usage

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
    res, err := s.SDK.DetectDominantLanguage(ctx, operations.DetectDominantLanguageRequest{
        DetectDominantLanguageRequest: shared.DetectDominantLanguageRequest{
            Text: "architecto",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.DetectDominantLanguageXAmzTargetEnumComprehend20171127DetectDominantLanguage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectDominantLanguageResponse != nil {
        // handle response
    }
}
```

## DetectEntities

<p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>

### Example Usage

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
    res, err := s.SDK.DetectEntities(ctx, operations.DetectEntitiesRequest{
        DetectEntitiesRequest: shared.DetectEntitiesRequest{
            Bytes: sdk.String("porro"),
            DocumentReaderConfig: &shared.DocumentReaderConfig{
                DocumentReadAction: shared.DocumentReadActionEnumTextractAnalyzeDocument,
                DocumentReadMode: shared.DocumentReadModeEnumServiceDefault.ToPointer(),
                FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                    shared.DocumentReadFeatureTypesEnumForms,
                    shared.DocumentReadFeatureTypesEnumTables,
                    shared.DocumentReadFeatureTypesEnumTables,
                },
            },
            EndpointArn: sdk.String("laudantium"),
            LanguageCode: shared.LanguageCodeEnumPt.ToPointer(),
            Text: sdk.String("occaecati"),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.DetectEntitiesXAmzTargetEnumComprehend20171127DetectEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectEntitiesResponse != nil {
        // handle response
    }
}
```

## DetectKeyPhrases

Detects the key noun phrases found in the text. 

### Example Usage

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
    res, err := s.SDK.DetectKeyPhrases(ctx, operations.DetectKeyPhrasesRequest{
        DetectKeyPhrasesRequest: shared.DetectKeyPhrasesRequest{
            LanguageCode: shared.LanguageCodeEnumPt,
            Text: "consectetur",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DetectKeyPhrasesXAmzTargetEnumComprehend20171127DetectKeyPhrases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectKeyPhrasesResponse != nil {
        // handle response
    }
}
```

## DetectPiiEntities

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

### Example Usage

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
    res, err := s.SDK.DetectPiiEntities(ctx, operations.DetectPiiEntitiesRequest{
        DetectPiiEntitiesRequest: shared.DetectPiiEntitiesRequest{
            LanguageCode: shared.LanguageCodeEnumHi,
            Text: "facilis",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DetectPiiEntitiesXAmzTargetEnumComprehend20171127DetectPiiEntities,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectPiiEntitiesResponse != nil {
        // handle response
    }
}
```

## DetectSentiment

Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 

### Example Usage

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
    res, err := s.SDK.DetectSentiment(ctx, operations.DetectSentimentRequest{
        DetectSentimentRequest: shared.DetectSentimentRequest{
            LanguageCode: shared.LanguageCodeEnumKo,
            Text: "aut",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DetectSentimentXAmzTargetEnumComprehend20171127DetectSentiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectSentimentResponse != nil {
        // handle response
    }
}
```

## DetectSyntax

Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide. 

### Example Usage

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
    res, err := s.SDK.DetectSyntax(ctx, operations.DetectSyntaxRequest{
        DetectSyntaxRequest: shared.DetectSyntaxRequest{
            LanguageCode: shared.SyntaxLanguageCodeEnumFr,
            Text: "eligendi",
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DetectSyntaxXAmzTargetEnumComprehend20171127DetectSyntax,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectSyntaxResponse != nil {
        // handle response
    }
}
```

## DetectTargetedSentiment

<p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>

### Example Usage

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
    res, err := s.SDK.DetectTargetedSentiment(ctx, operations.DetectTargetedSentimentRequest{
        DetectTargetedSentimentRequest: shared.DetectTargetedSentimentRequest{
            LanguageCode: shared.LanguageCodeEnumPt,
            Text: "possimus",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DetectTargetedSentimentXAmzTargetEnumComprehend20171127DetectTargetedSentiment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectTargetedSentimentResponse != nil {
        // handle response
    }
}
```

## ImportModel

<p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>

### Example Usage

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
    res, err := s.SDK.ImportModel(ctx, operations.ImportModelRequest{
        ImportModelRequest: shared.ImportModelRequest{
            DataAccessRoleArn: sdk.String("quasi"),
            ModelKmsKeyID: sdk.String("ex"),
            ModelName: sdk.String("nulla"),
            SourceModelArn: "excepturi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nostrum",
                    Value: sdk.String("sapiente"),
                },
                shared.Tag{
                    Key: "quisquam",
                    Value: sdk.String("saepe"),
                },
                shared.Tag{
                    Key: "ea",
                    Value: sdk.String("impedit"),
                },
                shared.Tag{
                    Key: "corporis",
                    Value: sdk.String("veniam"),
                },
            },
            VersionName: sdk.String("aliquid"),
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.ImportModelXAmzTargetEnumComprehend20171127ImportModel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportModelResponse != nil {
        // handle response
    }
}
```

## ListDatasets

List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatasets(ctx, operations.ListDatasetsRequest{
        ListDatasetsRequest: shared.ListDatasetsRequest{
            Filter: &shared.DatasetFilter{
                CreationTimeAfter: types.MustTimeFromString("2022-12-12T11:58:39.585Z"),
                CreationTimeBefore: types.MustTimeFromString("2020-10-28T11:22:47.751Z"),
                DatasetType: shared.DatasetTypeEnumTrain.ToPointer(),
                Status: shared.DatasetStatusEnumCreating.ToPointer(),
            },
            FlywheelArn: sdk.String("deleniti"),
            MaxResults: sdk.Int64(770581),
            NextToken: sdk.String("aliquam"),
        },
        MaxResults: sdk.String("fugit"),
        NextToken: sdk.String("accusamus"),
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.ListDatasetsXAmzTargetEnumComprehend20171127ListDatasets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
        // handle response
    }
}
```

## ListDocumentClassificationJobs

Gets a list of the documentation classification jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDocumentClassificationJobs(ctx, operations.ListDocumentClassificationJobsRequest{
        ListDocumentClassificationJobsRequest: shared.ListDocumentClassificationJobsRequest{
            Filter: &shared.DocumentClassificationJobFilter{
                JobName: sdk.String("eum"),
                JobStatus: shared.JobStatusEnumCompleted.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-04-30T16:20:53.400Z"),
                SubmitTimeBefore: types.MustTimeFromString("2020-06-02T16:42:54.630Z"),
            },
            MaxResults: sdk.Int64(379034),
            NextToken: sdk.String("libero"),
        },
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("tempora"),
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.ListDocumentClassificationJobsXAmzTargetEnumComprehend20171127ListDocumentClassificationJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentClassificationJobsResponse != nil {
        // handle response
    }
}
```

## ListDocumentClassifierSummaries

Gets a list of summaries of the document classifiers that you have created

### Example Usage

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
    res, err := s.SDK.ListDocumentClassifierSummaries(ctx, operations.ListDocumentClassifierSummariesRequest{
        ListDocumentClassifierSummariesRequest: shared.ListDocumentClassifierSummariesRequest{
            MaxResults: sdk.Int64(262118),
            NextToken: sdk.String("esse"),
        },
        MaxResults: sdk.String("esse"),
        NextToken: sdk.String("rem"),
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.ListDocumentClassifierSummariesXAmzTargetEnumComprehend20171127ListDocumentClassifierSummaries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentClassifierSummariesResponse != nil {
        // handle response
    }
}
```

## ListDocumentClassifiers

Gets a list of the document classifiers that you have created.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDocumentClassifiers(ctx, operations.ListDocumentClassifiersRequest{
        ListDocumentClassifiersRequest: shared.ListDocumentClassifiersRequest{
            Filter: &shared.DocumentClassifierFilter{
                DocumentClassifierName: sdk.String("assumenda"),
                Status: shared.ModelStatusEnumTraining.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-06-04T08:40:57.100Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-12-11T06:00:38.230Z"),
            },
            MaxResults: sdk.Int64(660040),
            NextToken: sdk.String("quidem"),
        },
        MaxResults: sdk.String("neque"),
        NextToken: sdk.String("quo"),
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.ListDocumentClassifiersXAmzTargetEnumComprehend20171127ListDocumentClassifiers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDocumentClassifiersResponse != nil {
        // handle response
    }
}
```

## ListDominantLanguageDetectionJobs

Gets a list of the dominant language detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDominantLanguageDetectionJobs(ctx, operations.ListDominantLanguageDetectionJobsRequest{
        ListDominantLanguageDetectionJobsRequest: shared.ListDominantLanguageDetectionJobsRequest{
            Filter: &shared.DominantLanguageDetectionJobFilter{
                JobName: sdk.String("cupiditate"),
                JobStatus: shared.JobStatusEnumSubmitted.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-02-09T09:38:41.756Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-11-13T06:50:40.250Z"),
            },
            MaxResults: sdk.Int64(197054),
            NextToken: sdk.String("quo"),
        },
        MaxResults: sdk.String("esse"),
        NextToken: sdk.String("recusandae"),
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.ListDominantLanguageDetectionJobsXAmzTargetEnumComprehend20171127ListDominantLanguageDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDominantLanguageDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListEndpoints

Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEndpoints(ctx, operations.ListEndpointsRequest{
        ListEndpointsRequest: shared.ListEndpointsRequest{
            Filter: &shared.EndpointFilter{
                CreationTimeAfter: types.MustTimeFromString("2022-01-30T01:01:49.335Z"),
                CreationTimeBefore: types.MustTimeFromString("2022-06-04T04:43:25.138Z"),
                ModelArn: sdk.String("commodi"),
                Status: shared.EndpointStatusEnumUpdating.ToPointer(),
            },
            MaxResults: sdk.Int64(174112),
            NextToken: sdk.String("deserunt"),
        },
        MaxResults: sdk.String("molestiae"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListEndpointsXAmzTargetEnumComprehend20171127ListEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointsResponse != nil {
        // handle response
    }
}
```

## ListEntitiesDetectionJobs

Gets a list of the entity detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEntitiesDetectionJobs(ctx, operations.ListEntitiesDetectionJobsRequest{
        ListEntitiesDetectionJobsRequest: shared.ListEntitiesDetectionJobsRequest{
            Filter: &shared.EntitiesDetectionJobFilter{
                JobName: sdk.String("fuga"),
                JobStatus: shared.JobStatusEnumFailed.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-06-18T04:24:04.187Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-09-04T03:00:04.529Z"),
            },
            MaxResults: sdk.Int64(392676),
            NextToken: sdk.String("fugit"),
        },
        MaxResults: sdk.String("sapiente"),
        NextToken: sdk.String("consequuntur"),
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListEntitiesDetectionJobsXAmzTargetEnumComprehend20171127ListEntitiesDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntitiesDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListEntityRecognizerSummaries

Gets a list of summaries for the entity recognizers that you have created.

### Example Usage

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
    res, err := s.SDK.ListEntityRecognizerSummaries(ctx, operations.ListEntityRecognizerSummariesRequest{
        ListEntityRecognizerSummariesRequest: shared.ListEntityRecognizerSummariesRequest{
            MaxResults: sdk.Int64(910545),
            NextToken: sdk.String("accusamus"),
        },
        MaxResults: sdk.String("veritatis"),
        NextToken: sdk.String("esse"),
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.ListEntityRecognizerSummariesXAmzTargetEnumComprehend20171127ListEntityRecognizerSummaries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntityRecognizerSummariesResponse != nil {
        // handle response
    }
}
```

## ListEntityRecognizers

<p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEntityRecognizers(ctx, operations.ListEntityRecognizersRequest{
        ListEntityRecognizersRequest: shared.ListEntityRecognizersRequest{
            Filter: &shared.EntityRecognizerFilter{
                RecognizerName: sdk.String("harum"),
                Status: shared.ModelStatusEnumStopRequested.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-11-03T10:56:47.600Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-04-14T13:42:03.513Z"),
            },
            MaxResults: sdk.Int64(756779),
            NextToken: sdk.String("sit"),
        },
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("tempore"),
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ListEntityRecognizersXAmzTargetEnumComprehend20171127ListEntityRecognizers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntityRecognizersResponse != nil {
        // handle response
    }
}
```

## ListEventsDetectionJobs

Gets a list of the events detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEventsDetectionJobs(ctx, operations.ListEventsDetectionJobsRequest{
        ListEventsDetectionJobsRequest: shared.ListEventsDetectionJobsRequest{
            Filter: &shared.EventsDetectionJobFilter{
                JobName: sdk.String("consectetur"),
                JobStatus: shared.JobStatusEnumCompleted.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-10-26T13:57:26.455Z"),
                SubmitTimeBefore: types.MustTimeFromString("2020-06-05T19:02:55.998Z"),
            },
            MaxResults: sdk.Int64(557811),
            NextToken: sdk.String("esse"),
        },
        MaxResults: sdk.String("quasi"),
        NextToken: sdk.String("a"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.ListEventsDetectionJobsXAmzTargetEnumComprehend20171127ListEventsDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventsDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListFlywheelIterationHistory

Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFlywheelIterationHistory(ctx, operations.ListFlywheelIterationHistoryRequest{
        ListFlywheelIterationHistoryRequest: shared.ListFlywheelIterationHistoryRequest{
            Filter: &shared.FlywheelIterationFilter{
                CreationTimeAfter: types.MustTimeFromString("2022-09-29T22:10:17.894Z"),
                CreationTimeBefore: types.MustTimeFromString("2022-11-27T12:32:54.264Z"),
            },
            FlywheelArn: "similique",
            MaxResults: sdk.Int64(633608),
            NextToken: sdk.String("aliquid"),
        },
        MaxResults: sdk.String("tenetur"),
        NextToken: sdk.String("quae"),
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.ListFlywheelIterationHistoryXAmzTargetEnumComprehend20171127ListFlywheelIterationHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlywheelIterationHistoryResponse != nil {
        // handle response
    }
}
```

## ListFlywheels

Gets a list of the flywheels that you have created.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFlywheels(ctx, operations.ListFlywheelsRequest{
        ListFlywheelsRequest: shared.ListFlywheelsRequest{
            Filter: &shared.FlywheelFilter{
                CreationTimeAfter: types.MustTimeFromString("2022-09-10T22:48:07.154Z"),
                CreationTimeBefore: types.MustTimeFromString("2022-08-22T20:24:31.399Z"),
                Status: shared.FlywheelStatusEnumActive.ToPointer(),
            },
            MaxResults: sdk.Int64(443879),
            NextToken: sdk.String("ullam"),
        },
        MaxResults: sdk.String("nisi"),
        NextToken: sdk.String("aut"),
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ListFlywheelsXAmzTargetEnumComprehend20171127ListFlywheels,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlywheelsResponse != nil {
        // handle response
    }
}
```

## ListKeyPhrasesDetectionJobs

Get a list of key phrase detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListKeyPhrasesDetectionJobs(ctx, operations.ListKeyPhrasesDetectionJobsRequest{
        ListKeyPhrasesDetectionJobsRequest: shared.ListKeyPhrasesDetectionJobsRequest{
            Filter: &shared.KeyPhrasesDetectionJobFilter{
                JobName: sdk.String("architecto"),
                JobStatus: shared.JobStatusEnumFailed.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-09-15T03:59:52.153Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-09-22T05:30:53.483Z"),
            },
            MaxResults: sdk.Int64(454162),
            NextToken: sdk.String("ipsa"),
        },
        MaxResults: sdk.String("minima"),
        NextToken: sdk.String("veritatis"),
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListKeyPhrasesDetectionJobsXAmzTargetEnumComprehend20171127ListKeyPhrasesDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListKeyPhrasesDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListPiiEntitiesDetectionJobs

Gets a list of the PII entity detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPiiEntitiesDetectionJobs(ctx, operations.ListPiiEntitiesDetectionJobsRequest{
        ListPiiEntitiesDetectionJobsRequest: shared.ListPiiEntitiesDetectionJobsRequest{
            Filter: &shared.PiiEntitiesDetectionJobFilter{
                JobName: sdk.String("laudantium"),
                JobStatus: shared.JobStatusEnumCompleted.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2022-11-12T07:20:30.934Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-07-01T01:59:37.066Z"),
            },
            MaxResults: sdk.Int64(32465),
            NextToken: sdk.String("dolor"),
        },
        MaxResults: sdk.String("occaecati"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListPiiEntitiesDetectionJobsXAmzTargetEnumComprehend20171127ListPiiEntitiesDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPiiEntitiesDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListSentimentDetectionJobs

Gets a list of sentiment detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSentimentDetectionJobs(ctx, operations.ListSentimentDetectionJobsRequest{
        ListSentimentDetectionJobsRequest: shared.ListSentimentDetectionJobsRequest{
            Filter: &shared.SentimentDetectionJobFilter{
                JobName: sdk.String("natus"),
                JobStatus: shared.JobStatusEnumInProgress.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-11-17T02:47:10.534Z"),
                SubmitTimeBefore: types.MustTimeFromString("2022-11-12T00:03:51.639Z"),
            },
            MaxResults: sdk.Int64(409054),
            NextToken: sdk.String("quaerat"),
        },
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("repellendus"),
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ListSentimentDetectionJobsXAmzTargetEnumComprehend20171127ListSentimentDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSentimentDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags associated with a given Amazon Comprehend resource. 

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "quaerat",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumComprehend20171127ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTargetedSentimentDetectionJobs

Gets a list of targeted sentiment detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTargetedSentimentDetectionJobs(ctx, operations.ListTargetedSentimentDetectionJobsRequest{
        ListTargetedSentimentDetectionJobsRequest: shared.ListTargetedSentimentDetectionJobsRequest{
            Filter: &shared.TargetedSentimentDetectionJobFilter{
                JobName: sdk.String("suscipit"),
                JobStatus: shared.JobStatusEnumInProgress.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-09-01T22:08:53.618Z"),
                SubmitTimeBefore: types.MustTimeFromString("2021-06-13T13:07:55.703Z"),
            },
            MaxResults: sdk.Int64(853940),
            NextToken: sdk.String("vel"),
        },
        MaxResults: sdk.String("ducimus"),
        NextToken: sdk.String("quos"),
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.ListTargetedSentimentDetectionJobsXAmzTargetEnumComprehend20171127ListTargetedSentimentDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetedSentimentDetectionJobsResponse != nil {
        // handle response
    }
}
```

## ListTopicsDetectionJobs

Gets a list of the topic detection jobs that you have submitted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTopicsDetectionJobs(ctx, operations.ListTopicsDetectionJobsRequest{
        ListTopicsDetectionJobsRequest: shared.ListTopicsDetectionJobsRequest{
            Filter: &shared.TopicsDetectionJobFilter{
                JobName: sdk.String("corporis"),
                JobStatus: shared.JobStatusEnumStopped.ToPointer(),
                SubmitTimeAfter: types.MustTimeFromString("2021-11-29T08:07:19.623Z"),
                SubmitTimeBefore: types.MustTimeFromString("2021-10-22T16:49:10.196Z"),
            },
            MaxResults: sdk.Int64(46007),
            NextToken: sdk.String("cum"),
        },
        MaxResults: sdk.String("consectetur"),
        NextToken: sdk.String("in"),
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.ListTopicsDetectionJobsXAmzTargetEnumComprehend20171127ListTopicsDetectionJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTopicsDetectionJobsResponse != nil {
        // handle response
    }
}
```

## PutResourcePolicy

Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.

### Example Usage

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        PutResourcePolicyRequest: shared.PutResourcePolicyRequest{
            PolicyRevisionID: sdk.String("quidem"),
            ResourceArn: "saepe",
            ResourcePolicy: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.PutResourcePolicyXAmzTargetEnumComprehend20171127PutResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## StartDocumentClassificationJob

Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.

### Example Usage

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
    res, err := s.SDK.StartDocumentClassificationJob(ctx, operations.StartDocumentClassificationJobRequest{
        StartDocumentClassificationJobRequest: shared.StartDocumentClassificationJobRequest{
            ClientRequestToken: sdk.String("dignissimos"),
            DataAccessRoleArn: "a",
            DocumentClassifierArn: sdk.String("debitis"),
            FlywheelArn: sdk.String("consectetur"),
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractDetectDocumentText,
                    DocumentReadMode: shared.DocumentReadModeEnumForceDocumentReadAction.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumTables,
                        shared.DocumentReadFeatureTypesEnumForms,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "vitae",
            },
            JobName: sdk.String("accusamus"),
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("similique"),
                S3URI: "tempora",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptas",
                    Value: sdk.String("voluptas"),
                },
            },
            VolumeKmsKeyID: sdk.String("voluptas"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "nobis",
                    "dolorum",
                },
                Subnets: []string{
                    "minus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.StartDocumentClassificationJobXAmzTargetEnumComprehend20171127StartDocumentClassificationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDocumentClassificationJobResponse != nil {
        // handle response
    }
}
```

## StartDominantLanguageDetectionJob

Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartDominantLanguageDetectionJob(ctx, operations.StartDominantLanguageDetectionJobRequest{
        StartDominantLanguageDetectionJobRequest: shared.StartDominantLanguageDetectionJobRequest{
            ClientRequestToken: sdk.String("ullam"),
            DataAccessRoleArn: "adipisci",
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractAnalyzeDocument,
                    DocumentReadMode: shared.DocumentReadModeEnumForceDocumentReadAction.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumTables,
                        shared.DocumentReadFeatureTypesEnumForms,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "pariatur",
            },
            JobName: sdk.String("totam"),
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("hic"),
                S3URI: "exercitationem",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sit",
                    Value: sdk.String("rerum"),
                },
                shared.Tag{
                    Key: "sed",
                    Value: sdk.String("reiciendis"),
                },
                shared.Tag{
                    Key: "explicabo",
                    Value: sdk.String("asperiores"),
                },
                shared.Tag{
                    Key: "facilis",
                    Value: sdk.String("voluptate"),
                },
            },
            VolumeKmsKeyID: sdk.String("expedita"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "iste",
                },
                Subnets: []string{
                    "laborum",
                    "sed",
                },
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.StartDominantLanguageDetectionJobXAmzTargetEnumComprehend20171127StartDominantLanguageDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartDominantLanguageDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartEntitiesDetectionJob

<p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>

### Example Usage

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
    res, err := s.SDK.StartEntitiesDetectionJob(ctx, operations.StartEntitiesDetectionJobRequest{
        StartEntitiesDetectionJobRequest: shared.StartEntitiesDetectionJobRequest{
            ClientRequestToken: sdk.String("suscipit"),
            DataAccessRoleArn: "sapiente",
            EntityRecognizerArn: sdk.String("debitis"),
            FlywheelArn: sdk.String("illo"),
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractAnalyzeDocument,
                    DocumentReadMode: shared.DocumentReadModeEnumServiceDefault.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumTables,
                        shared.DocumentReadFeatureTypesEnumTables,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "eius",
            },
            JobName: sdk.String("necessitatibus"),
            LanguageCode: shared.LanguageCodeEnumFr,
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("ea"),
                S3URI: "occaecati",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptatibus",
                    Value: sdk.String("tempora"),
                },
                shared.Tag{
                    Key: "tempora",
                    Value: sdk.String("voluptate"),
                },
                shared.Tag{
                    Key: "reiciendis",
                    Value: sdk.String("ex"),
                },
            },
            VolumeKmsKeyID: sdk.String("sit"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "officiis",
                },
                Subnets: []string{
                    "facilis",
                    "quaerat",
                    "incidunt",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzTarget: operations.StartEntitiesDetectionJobXAmzTargetEnumComprehend20171127StartEntitiesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartEntitiesDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartEventsDetectionJob

Starts an asynchronous event detection job for a collection of documents.

### Example Usage

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
    res, err := s.SDK.StartEventsDetectionJob(ctx, operations.StartEventsDetectionJobRequest{
        StartEventsDetectionJobRequest: shared.StartEventsDetectionJobRequest{
            ClientRequestToken: sdk.String("minima"),
            DataAccessRoleArn: "recusandae",
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractAnalyzeDocument,
                    DocumentReadMode: shared.DocumentReadModeEnumForceDocumentReadAction.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumTables,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "numquam",
            },
            JobName: sdk.String("veniam"),
            LanguageCode: shared.LanguageCodeEnumPt,
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("officiis"),
                S3URI: "beatae",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "exercitationem",
                    Value: sdk.String("praesentium"),
                },
                shared.Tag{
                    Key: "cum",
                    Value: sdk.String("laboriosam"),
                },
                shared.Tag{
                    Key: "dolorum",
                    Value: sdk.String("voluptatum"),
                },
            },
            TargetEventTypes: []string{
                "hic",
                "expedita",
                "debitis",
            },
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.StartEventsDetectionJobXAmzTargetEnumComprehend20171127StartEventsDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartEventsDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartFlywheelIteration

Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.

### Example Usage

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
    res, err := s.SDK.StartFlywheelIteration(ctx, operations.StartFlywheelIterationRequest{
        StartFlywheelIterationRequest: shared.StartFlywheelIterationRequest{
            ClientRequestToken: sdk.String("tempora"),
            FlywheelArn: "atque",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.StartFlywheelIterationXAmzTargetEnumComprehend20171127StartFlywheelIteration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFlywheelIterationResponse != nil {
        // handle response
    }
}
```

## StartKeyPhrasesDetectionJob

Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartKeyPhrasesDetectionJob(ctx, operations.StartKeyPhrasesDetectionJobRequest{
        StartKeyPhrasesDetectionJobRequest: shared.StartKeyPhrasesDetectionJobRequest{
            ClientRequestToken: sdk.String("consequatur"),
            DataAccessRoleArn: "esse",
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractDetectDocumentText,
                    DocumentReadMode: shared.DocumentReadModeEnumServiceDefault.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumTables,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerFile.ToPointer(),
                S3URI: "blanditiis",
            },
            JobName: sdk.String("ex"),
            LanguageCode: shared.LanguageCodeEnumEs,
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("sit"),
                S3URI: "vel",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "saepe",
                    Value: sdk.String("error"),
                },
                shared.Tag{
                    Key: "consequatur",
                    Value: sdk.String("incidunt"),
                },
            },
            VolumeKmsKeyID: sdk.String("reiciendis"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "harum",
                },
                Subnets: []string{
                    "architecto",
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.StartKeyPhrasesDetectionJobXAmzTargetEnumComprehend20171127StartKeyPhrasesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartKeyPhrasesDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartPiiEntitiesDetectionJob

Starts an asynchronous PII entity detection job for a collection of documents.

### Example Usage

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
    res, err := s.SDK.StartPiiEntitiesDetectionJob(ctx, operations.StartPiiEntitiesDetectionJobRequest{
        StartPiiEntitiesDetectionJobRequest: shared.StartPiiEntitiesDetectionJobRequest{
            ClientRequestToken: sdk.String("laboriosam"),
            DataAccessRoleArn: "alias",
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractDetectDocumentText,
                    DocumentReadMode: shared.DocumentReadModeEnumForceDocumentReadAction.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumForms,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "repellendus",
            },
            JobName: sdk.String("delectus"),
            LanguageCode: shared.LanguageCodeEnumZh,
            Mode: shared.PiiEntitiesDetectionModeEnumOnlyRedaction,
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("est"),
                S3URI: "quidem",
            },
            RedactionConfig: &shared.RedactionConfig{
                MaskCharacter: sdk.String("reprehenderit"),
                MaskMode: shared.PiiEntitiesDetectionMaskModeEnumReplaceWithPiiEntityType.ToPointer(),
                PiiEntityTypes: []shared.PiiEntityTypeEnum{
                    shared.PiiEntityTypeEnumAwsAccessKey,
                    shared.PiiEntityTypeEnumLicensePlate,
                    shared.PiiEntityTypeEnumPassportNumber,
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quisquam",
                    Value: sdk.String("repudiandae"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.StartPiiEntitiesDetectionJobXAmzTargetEnumComprehend20171127StartPiiEntitiesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartPiiEntitiesDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartSentimentDetectionJob

Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartSentimentDetectionJob(ctx, operations.StartSentimentDetectionJobRequest{
        StartSentimentDetectionJobRequest: shared.StartSentimentDetectionJobRequest{
            ClientRequestToken: sdk.String("maxime"),
            DataAccessRoleArn: "et",
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractDetectDocumentText,
                    DocumentReadMode: shared.DocumentReadModeEnumServiceDefault.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumTables,
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumForms,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "accusamus",
            },
            JobName: sdk.String("natus"),
            LanguageCode: shared.LanguageCodeEnumDe,
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("aspernatur"),
                S3URI: "ex",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "corrupti",
                    Value: sdk.String("at"),
                },
                shared.Tag{
                    Key: "error",
                    Value: sdk.String("blanditiis"),
                },
                shared.Tag{
                    Key: "suscipit",
                    Value: sdk.String("repudiandae"),
                },
                shared.Tag{
                    Key: "atque",
                    Value: sdk.String("atque"),
                },
            },
            VolumeKmsKeyID: sdk.String("sunt"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "dolorum",
                    "repellendus",
                    "labore",
                    "reiciendis",
                },
                Subnets: []string{
                    "repudiandae",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.StartSentimentDetectionJobXAmzTargetEnumComprehend20171127StartSentimentDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSentimentDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartTargetedSentimentDetectionJob

Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartTargetedSentimentDetectionJob(ctx, operations.StartTargetedSentimentDetectionJobRequest{
        StartTargetedSentimentDetectionJobRequest: shared.StartTargetedSentimentDetectionJobRequest{
            ClientRequestToken: sdk.String("a"),
            DataAccessRoleArn: "molestias",
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractDetectDocumentText,
                    DocumentReadMode: shared.DocumentReadModeEnumForceDocumentReadAction.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumForms,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "perspiciatis",
            },
            JobName: sdk.String("in"),
            LanguageCode: shared.LanguageCodeEnumFr,
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("eveniet"),
                S3URI: "occaecati",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "fugit",
                    Value: sdk.String("id"),
                },
            },
            VolumeKmsKeyID: sdk.String("quis"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "error",
                    "illo",
                },
                Subnets: []string{
                    "quidem",
                    "eveniet",
                },
            },
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.StartTargetedSentimentDetectionJobXAmzTargetEnumComprehend20171127StartTargetedSentimentDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTargetedSentimentDetectionJobResponse != nil {
        // handle response
    }
}
```

## StartTopicsDetectionJob

Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.

### Example Usage

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
    res, err := s.SDK.StartTopicsDetectionJob(ctx, operations.StartTopicsDetectionJobRequest{
        StartTopicsDetectionJobRequest: shared.StartTopicsDetectionJobRequest{
            ClientRequestToken: sdk.String("molestiae"),
            DataAccessRoleArn: "eveniet",
            InputDataConfig: shared.InputDataConfig{
                DocumentReaderConfig: &shared.DocumentReaderConfig{
                    DocumentReadAction: shared.DocumentReadActionEnumTextractDetectDocumentText,
                    DocumentReadMode: shared.DocumentReadModeEnumForceDocumentReadAction.ToPointer(),
                    FeatureTypes: []shared.DocumentReadFeatureTypesEnum{
                        shared.DocumentReadFeatureTypesEnumForms,
                        shared.DocumentReadFeatureTypesEnumTables,
                    },
                },
                InputFormat: shared.InputFormatEnumOneDocPerLine.ToPointer(),
                S3URI: "distinctio",
            },
            JobName: sdk.String("voluptatum"),
            NumberOfTopics: sdk.Int64(523006),
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("aliquam"),
                S3URI: "ad",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "alias",
                    Value: sdk.String("corporis"),
                },
                shared.Tag{
                    Key: "perspiciatis",
                    Value: sdk.String("nihil"),
                },
                shared.Tag{
                    Key: "mollitia",
                    Value: sdk.String("voluptas"),
                },
                shared.Tag{
                    Key: "alias",
                    Value: sdk.String("maiores"),
                },
            },
            VolumeKmsKeyID: sdk.String("reiciendis"),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "id",
                },
                Subnets: []string{
                    "dolore",
                    "dolorum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.StartTopicsDetectionJobXAmzTargetEnumComprehend20171127StartTopicsDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartTopicsDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopDominantLanguageDetectionJob

<p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

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
    res, err := s.SDK.StopDominantLanguageDetectionJob(ctx, operations.StopDominantLanguageDetectionJobRequest{
        StopDominantLanguageDetectionJobRequest: shared.StopDominantLanguageDetectionJobRequest{
            JobID: "ut",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.StopDominantLanguageDetectionJobXAmzTargetEnumComprehend20171127StopDominantLanguageDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopDominantLanguageDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopEntitiesDetectionJob

<p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

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
    res, err := s.SDK.StopEntitiesDetectionJob(ctx, operations.StopEntitiesDetectionJobRequest{
        StopEntitiesDetectionJobRequest: shared.StopEntitiesDetectionJobRequest{
            JobID: "esse",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.StopEntitiesDetectionJobXAmzTargetEnumComprehend20171127StopEntitiesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopEntitiesDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopEventsDetectionJob

Stops an events detection job in progress.

### Example Usage

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
    res, err := s.SDK.StopEventsDetectionJob(ctx, operations.StopEventsDetectionJobRequest{
        StopEventsDetectionJobRequest: shared.StopEventsDetectionJobRequest{
            JobID: "quasi",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.StopEventsDetectionJobXAmzTargetEnumComprehend20171127StopEventsDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopEventsDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopKeyPhrasesDetectionJob

<p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

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
    res, err := s.SDK.StopKeyPhrasesDetectionJob(ctx, operations.StopKeyPhrasesDetectionJobRequest{
        StopKeyPhrasesDetectionJobRequest: shared.StopKeyPhrasesDetectionJobRequest{
            JobID: "aliquid",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.StopKeyPhrasesDetectionJobXAmzTargetEnumComprehend20171127StopKeyPhrasesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopKeyPhrasesDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopPiiEntitiesDetectionJob

Stops a PII entities detection job in progress.

### Example Usage

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
    res, err := s.SDK.StopPiiEntitiesDetectionJob(ctx, operations.StopPiiEntitiesDetectionJobRequest{
        StopPiiEntitiesDetectionJobRequest: shared.StopPiiEntitiesDetectionJobRequest{
            JobID: "officia",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.StopPiiEntitiesDetectionJobXAmzTargetEnumComprehend20171127StopPiiEntitiesDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopPiiEntitiesDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopSentimentDetectionJob

<p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

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
    res, err := s.SDK.StopSentimentDetectionJob(ctx, operations.StopSentimentDetectionJobRequest{
        StopSentimentDetectionJobRequest: shared.StopSentimentDetectionJobRequest{
            JobID: "cumque",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.StopSentimentDetectionJobXAmzTargetEnumComprehend20171127StopSentimentDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopSentimentDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopTargetedSentimentDetectionJob

<p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>

### Example Usage

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
    res, err := s.SDK.StopTargetedSentimentDetectionJob(ctx, operations.StopTargetedSentimentDetectionJobRequest{
        StopTargetedSentimentDetectionJobRequest: shared.StopTargetedSentimentDetectionJobRequest{
            JobID: "quae",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.StopTargetedSentimentDetectionJobXAmzTargetEnumComprehend20171127StopTargetedSentimentDetectionJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopTargetedSentimentDetectionJobResponse != nil {
        // handle response
    }
}
```

## StopTrainingDocumentClassifier

<p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>

### Example Usage

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
    res, err := s.SDK.StopTrainingDocumentClassifier(ctx, operations.StopTrainingDocumentClassifierRequest{
        StopTrainingDocumentClassifierRequest: shared.StopTrainingDocumentClassifierRequest{
            DocumentClassifierArn: "impedit",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.StopTrainingDocumentClassifierXAmzTargetEnumComprehend20171127StopTrainingDocumentClassifier,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopTrainingDocumentClassifierResponse != nil {
        // handle response
    }
}
```

## StopTrainingEntityRecognizer

<p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>

### Example Usage

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
    res, err := s.SDK.StopTrainingEntityRecognizer(ctx, operations.StopTrainingEntityRecognizerRequest{
        StopTrainingEntityRecognizerRequest: shared.StopTrainingEntityRecognizerRequest{
            EntityRecognizerArn: "provident",
        },
        XAmzAlgorithm: sdk.String("earum"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzTarget: operations.StopTrainingEntityRecognizerXAmzTargetEnumComprehend20171127StopTrainingEntityRecognizer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopTrainingEntityRecognizerResponse != nil {
        // handle response
    }
}
```

## TagResource

Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "maiores",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aliquid",
                    Value: sdk.String("porro"),
                },
                shared.Tag{
                    Key: "suscipit",
                    Value: sdk.String("dolorem"),
                },
                shared.Tag{
                    Key: "fugit",
                    Value: sdk.String("cumque"),
                },
                shared.Tag{
                    Key: "fuga",
                    Value: sdk.String("ratione"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumComprehend20171127TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes a specific tag associated with an Amazon Comprehend resource. 

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "natus",
            TagKeys: []string{
                "suscipit",
                "adipisci",
                "quasi",
            },
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumComprehend20171127UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateEndpoint

Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.

### Example Usage

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
    res, err := s.SDK.UpdateEndpoint(ctx, operations.UpdateEndpointRequest{
        UpdateEndpointRequest: shared.UpdateEndpointRequest{
            DesiredDataAccessRoleArn: sdk.String("molestiae"),
            DesiredInferenceUnits: sdk.Int64(115834),
            DesiredModelArn: sdk.String("iusto"),
            EndpointArn: "esse",
            FlywheelArn: sdk.String("praesentium"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.UpdateEndpointXAmzTargetEnumComprehend20171127UpdateEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEndpointResponse != nil {
        // handle response
    }
}
```

## UpdateFlywheel

Update the configuration information for an existing flywheel.

### Example Usage

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
    res, err := s.SDK.UpdateFlywheel(ctx, operations.UpdateFlywheelRequest{
        UpdateFlywheelRequest: shared.UpdateFlywheelRequest{
            ActiveModelArn: sdk.String("odio"),
            DataAccessRoleArn: sdk.String("tempora"),
            DataSecurityConfig: &shared.UpdateDataSecurityConfig{
                ModelKmsKeyID: sdk.String("esse"),
                VolumeKmsKeyID: sdk.String("ex"),
                VpcConfig: &shared.VpcConfig{
                    SecurityGroupIds: []string{
                        "aliquid",
                    },
                    Subnets: []string{
                        "laborum",
                    },
                },
            },
            FlywheelArn: "sunt",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.UpdateFlywheelXAmzTargetEnumComprehend20171127UpdateFlywheel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFlywheelResponse != nil {
        // handle response
    }
}
```
