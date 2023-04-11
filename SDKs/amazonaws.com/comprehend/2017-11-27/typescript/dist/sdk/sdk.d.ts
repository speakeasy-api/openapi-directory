import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://comprehend.{region}.amazonaws.com", "https://comprehend.{region}.amazonaws.com", "http://comprehend.{region}.amazonaws.com.cn", "https://comprehend.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more.
 *
 * @see {@link https://docs.aws.amazon.com/comprehend/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
     */
    batchDetectDominantLanguage(req: operations.BatchDetectDominantLanguageRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectDominantLanguageResponse>;
    /**
     * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.
     */
    batchDetectEntities(req: operations.BatchDetectEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectEntitiesResponse>;
    /**
     * Detects the key noun phrases found in a batch of documents.
     */
    batchDetectKeyPhrases(req: operations.BatchDetectKeyPhrasesRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectKeyPhrasesResponse>;
    /**
     * Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
     */
    batchDetectSentiment(req: operations.BatchDetectSentimentRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectSentimentResponse>;
    /**
     * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
     */
    batchDetectSyntax(req: operations.BatchDetectSyntaxRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectSyntaxResponse>;
    /**
     * <p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
     */
    batchDetectTargetedSentiment(req: operations.BatchDetectTargetedSentimentRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectTargetedSentimentResponse>;
    /**
     * <p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
     */
    classifyDocument(req: operations.ClassifyDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyDocumentResponse>;
    /**
     * Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
     */
    containsPiiEntities(req: operations.ContainsPiiEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ContainsPiiEntitiesResponse>;
    /**
     * Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
     */
    createDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-document-classification.html">Document Classification</a> in the Comprehend Developer Guide.
     */
    createDocumentClassifier(req: operations.CreateDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentClassifierResponse>;
    /**
     * Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
     */
    createEndpoint(req: operations.CreateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointResponse>;
    /**
     * Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API.
     */
    createEntityRecognizer(req: operations.CreateEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.CreateEntityRecognizerResponse>;
    /**
     * <p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
     */
    createFlywheel(req: operations.CreateFlywheelRequest, config?: AxiosRequestConfig): Promise<operations.CreateFlywheelResponse>;
    /**
     * <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
     */
    deleteDocumentClassifier(req: operations.DeleteDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentClassifierResponse>;
    /**
     * Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
     */
    deleteEndpoint(req: operations.DeleteEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointResponse>;
    /**
     * <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
     */
    deleteEntityRecognizer(req: operations.DeleteEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEntityRecognizerResponse>;
    /**
     * <p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
     */
    deleteFlywheel(req: operations.DeleteFlywheelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlywheelResponse>;
    /**
     * Deletes a resource-based policy that is attached to a custom model.
     */
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
     */
    describeDataset(req: operations.DescribeDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetResponse>;
    /**
     * Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
     */
    describeDocumentClassificationJob(req: operations.DescribeDocumentClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDocumentClassificationJobResponse>;
    /**
     * Gets the properties associated with a document classifier.
     */
    describeDocumentClassifier(req: operations.DescribeDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDocumentClassifierResponse>;
    /**
     * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
     */
    describeDominantLanguageDetectionJob(req: operations.DescribeDominantLanguageDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDominantLanguageDetectionJobResponse>;
    /**
     * Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
     */
    describeEndpoint(req: operations.DescribeEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointResponse>;
    /**
     * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
     */
    describeEntitiesDetectionJob(req: operations.DescribeEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntitiesDetectionJobResponse>;
    /**
     * Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
     */
    describeEntityRecognizer(req: operations.DescribeEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntityRecognizerResponse>;
    /**
     * Gets the status and details of an events detection job.
     */
    describeEventsDetectionJob(req: operations.DescribeEventsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventsDetectionJobResponse>;
    /**
     * Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
     */
    describeFlywheel(req: operations.DescribeFlywheelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFlywheelResponse>;
    /**
     * Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
     */
    describeFlywheelIteration(req: operations.DescribeFlywheelIterationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFlywheelIterationResponse>;
    /**
     * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
     */
    describeKeyPhrasesDetectionJob(req: operations.DescribeKeyPhrasesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeKeyPhrasesDetectionJobResponse>;
    /**
     * Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
     */
    describePiiEntitiesDetectionJob(req: operations.DescribePiiEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribePiiEntitiesDetectionJobResponse>;
    /**
     * Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.
     */
    describeResourcePolicy(req: operations.DescribeResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourcePolicyResponse>;
    /**
     * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
     */
    describeSentimentDetectionJob(req: operations.DescribeSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSentimentDetectionJobResponse>;
    /**
     * Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.
     */
    describeTargetedSentimentDetectionJob(req: operations.DescribeTargetedSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTargetedSentimentDetectionJobResponse>;
    /**
     * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
     */
    describeTopicsDetectionJob(req: operations.DescribeTopicsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTopicsDetectionJobResponse>;
    /**
     * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
     */
    detectDominantLanguage(req: operations.DetectDominantLanguageRequest, config?: AxiosRequestConfig): Promise<operations.DetectDominantLanguageResponse>;
    /**
     * <p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
     */
    detectEntities(req: operations.DetectEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DetectEntitiesResponse>;
    /**
     * Detects the key noun phrases found in the text.
     */
    detectKeyPhrases(req: operations.DetectKeyPhrasesRequest, config?: AxiosRequestConfig): Promise<operations.DetectKeyPhrasesResponse>;
    /**
     * Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
     */
    detectPiiEntities(req: operations.DetectPiiEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DetectPiiEntitiesResponse>;
    /**
     * Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>).
     */
    detectSentiment(req: operations.DetectSentimentRequest, config?: AxiosRequestConfig): Promise<operations.DetectSentimentResponse>;
    /**
     * Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
     */
    detectSyntax(req: operations.DetectSyntaxRequest, config?: AxiosRequestConfig): Promise<operations.DetectSyntaxResponse>;
    /**
     * <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
     */
    detectTargetedSentiment(req: operations.DetectTargetedSentimentRequest, config?: AxiosRequestConfig): Promise<operations.DetectTargetedSentimentResponse>;
    /**
     * <p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>
     */
    importModel(req: operations.ImportModelRequest, config?: AxiosRequestConfig): Promise<operations.ImportModelResponse>;
    /**
     * List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
     */
    listDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * Gets a list of the documentation classification jobs that you have submitted.
     */
    listDocumentClassificationJobs(req: operations.ListDocumentClassificationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentClassificationJobsResponse>;
    /**
     * Gets a list of summaries of the document classifiers that you have created
     */
    listDocumentClassifierSummaries(req: operations.ListDocumentClassifierSummariesRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentClassifierSummariesResponse>;
    /**
     * Gets a list of the document classifiers that you have created.
     */
    listDocumentClassifiers(req: operations.ListDocumentClassifiersRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentClassifiersResponse>;
    /**
     * Gets a list of the dominant language detection jobs that you have submitted.
     */
    listDominantLanguageDetectionJobs(req: operations.ListDominantLanguageDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDominantLanguageDetectionJobsResponse>;
    /**
     * Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
     */
    listEndpoints(req: operations.ListEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListEndpointsResponse>;
    /**
     * Gets a list of the entity detection jobs that you have submitted.
     */
    listEntitiesDetectionJobs(req: operations.ListEntitiesDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesDetectionJobsResponse>;
    /**
     * Gets a list of summaries for the entity recognizers that you have created.
     */
    listEntityRecognizerSummaries(req: operations.ListEntityRecognizerSummariesRequest, config?: AxiosRequestConfig): Promise<operations.ListEntityRecognizerSummariesResponse>;
    /**
     * <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
     */
    listEntityRecognizers(req: operations.ListEntityRecognizersRequest, config?: AxiosRequestConfig): Promise<operations.ListEntityRecognizersResponse>;
    /**
     * Gets a list of the events detection jobs that you have submitted.
     */
    listEventsDetectionJobs(req: operations.ListEventsDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventsDetectionJobsResponse>;
    /**
     * Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
     */
    listFlywheelIterationHistory(req: operations.ListFlywheelIterationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListFlywheelIterationHistoryResponse>;
    /**
     * Gets a list of the flywheels that you have created.
     */
    listFlywheels(req: operations.ListFlywheelsRequest, config?: AxiosRequestConfig): Promise<operations.ListFlywheelsResponse>;
    /**
     * Get a list of key phrase detection jobs that you have submitted.
     */
    listKeyPhrasesDetectionJobs(req: operations.ListKeyPhrasesDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListKeyPhrasesDetectionJobsResponse>;
    /**
     * Gets a list of the PII entity detection jobs that you have submitted.
     */
    listPiiEntitiesDetectionJobs(req: operations.ListPiiEntitiesDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListPiiEntitiesDetectionJobsResponse>;
    /**
     * Gets a list of sentiment detection jobs that you have submitted.
     */
    listSentimentDetectionJobs(req: operations.ListSentimentDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListSentimentDetectionJobsResponse>;
    /**
     * Lists all tags associated with a given Amazon Comprehend resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Gets a list of targeted sentiment detection jobs that you have submitted.
     */
    listTargetedSentimentDetectionJobs(req: operations.ListTargetedSentimentDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetedSentimentDetectionJobsResponse>;
    /**
     * Gets a list of the topic detection jobs that you have submitted.
     */
    listTopicsDetectionJobs(req: operations.ListTopicsDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListTopicsDetectionJobsResponse>;
    /**
     * Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.
     */
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.
     */
    startDocumentClassificationJob(req: operations.StartDocumentClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.StartDocumentClassificationJobResponse>;
    /**
     * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
     */
    startDominantLanguageDetectionJob(req: operations.StartDominantLanguageDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartDominantLanguageDetectionJobResponse>;
    /**
     * <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
     */
    startEntitiesDetectionJob(req: operations.StartEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartEntitiesDetectionJobResponse>;
    /**
     * Starts an asynchronous event detection job for a collection of documents.
     */
    startEventsDetectionJob(req: operations.StartEventsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartEventsDetectionJobResponse>;
    /**
     * Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
     */
    startFlywheelIteration(req: operations.StartFlywheelIterationRequest, config?: AxiosRequestConfig): Promise<operations.StartFlywheelIterationResponse>;
    /**
     * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
     */
    startKeyPhrasesDetectionJob(req: operations.StartKeyPhrasesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartKeyPhrasesDetectionJobResponse>;
    /**
     * Starts an asynchronous PII entity detection job for a collection of documents.
     */
    startPiiEntitiesDetectionJob(req: operations.StartPiiEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartPiiEntitiesDetectionJobResponse>;
    /**
     * Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.
     */
    startSentimentDetectionJob(req: operations.StartSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartSentimentDetectionJobResponse>;
    /**
     * Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.
     */
    startTargetedSentimentDetectionJob(req: operations.StartTargetedSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartTargetedSentimentDetectionJobResponse>;
    /**
     * Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
     */
    startTopicsDetectionJob(req: operations.StartTopicsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartTopicsDetectionJobResponse>;
    /**
     * <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
     */
    stopDominantLanguageDetectionJob(req: operations.StopDominantLanguageDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopDominantLanguageDetectionJobResponse>;
    /**
     * <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
     */
    stopEntitiesDetectionJob(req: operations.StopEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopEntitiesDetectionJobResponse>;
    /**
     * Stops an events detection job in progress.
     */
    stopEventsDetectionJob(req: operations.StopEventsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopEventsDetectionJobResponse>;
    /**
     * <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
     */
    stopKeyPhrasesDetectionJob(req: operations.StopKeyPhrasesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopKeyPhrasesDetectionJobResponse>;
    /**
     * Stops a PII entities detection job in progress.
     */
    stopPiiEntitiesDetectionJob(req: operations.StopPiiEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopPiiEntitiesDetectionJobResponse>;
    /**
     * <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
     */
    stopSentimentDetectionJob(req: operations.StopSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopSentimentDetectionJobResponse>;
    /**
     * <p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
     */
    stopTargetedSentimentDetectionJob(req: operations.StopTargetedSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopTargetedSentimentDetectionJobResponse>;
    /**
     * <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
     */
    stopTrainingDocumentClassifier(req: operations.StopTrainingDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.StopTrainingDocumentClassifierResponse>;
    /**
     * <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
     */
    stopTrainingEntityRecognizer(req: operations.StopTrainingEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.StopTrainingEntityRecognizerResponse>;
    /**
     * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a specific tag associated with an Amazon Comprehend resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
     */
    updateEndpoint(req: operations.UpdateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointResponse>;
    /**
     * Update the configuration information for an existing flywheel.
     */
    updateFlywheel(req: operations.UpdateFlywheelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFlywheelResponse>;
}
