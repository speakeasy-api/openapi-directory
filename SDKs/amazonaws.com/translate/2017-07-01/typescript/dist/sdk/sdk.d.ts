import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://translate.{region}.amazonaws.com", "https://translate.{region}.amazonaws.com", "http://translate.{region}.amazonaws.com.cn", "https://translate.{region}.amazonaws.com.cn"];
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
 * Provides translation of the input content from the source language to the target language.
 *
 * @see {@link https://docs.aws.amazon.com/translate/} - Amazon Web Services documentation
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
     * Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
     */
    createParallelData(req: operations.CreateParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.CreateParallelDataResponse>;
    /**
     * Deletes a parallel data resource in Amazon Translate.
     */
    deleteParallelData(req: operations.DeleteParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.DeleteParallelDataResponse>;
    /**
     * A synchronous action that deletes a custom terminology.
     */
    deleteTerminology(req: operations.DeleteTerminologyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTerminologyResponse>;
    /**
     * Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
     */
    describeTextTranslationJob(req: operations.DescribeTextTranslationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTextTranslationJobResponse>;
    /**
     * Provides information about a parallel data resource.
     */
    getParallelData(req: operations.GetParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.GetParallelDataResponse>;
    /**
     * Retrieves a custom terminology.
     */
    getTerminology(req: operations.GetTerminologyRequest, config?: AxiosRequestConfig): Promise<operations.GetTerminologyResponse>;
    /**
     * <p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>
     */
    importTerminology(req: operations.ImportTerminologyRequest, config?: AxiosRequestConfig): Promise<operations.ImportTerminologyResponse>;
    /**
     * Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.
     */
    listLanguages(req: operations.ListLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.ListLanguagesResponse>;
    /**
     * Provides a list of your parallel data resources in Amazon Translate.
     */
    listParallelData(req: operations.ListParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.ListParallelDataResponse>;
    /**
     * Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Provides a list of custom terminologies associated with your account.
     */
    listTerminologies(req: operations.ListTerminologiesRequest, config?: AxiosRequestConfig): Promise<operations.ListTerminologiesResponse>;
    /**
     * Gets a list of the batch translation jobs that you have submitted.
     */
    listTextTranslationJobs(req: operations.ListTextTranslationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListTextTranslationJobsResponse>;
    /**
     * <p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
     */
    startTextTranslationJob(req: operations.StartTextTranslationJobRequest, config?: AxiosRequestConfig): Promise<operations.StartTextTranslationJobResponse>;
    /**
     * <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
     */
    stopTextTranslationJob(req: operations.StopTextTranslationJobRequest, config?: AxiosRequestConfig): Promise<operations.StopTextTranslationJobResponse>;
    /**
     * Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.
     */
    translateText(req: operations.TranslateTextRequest, config?: AxiosRequestConfig): Promise<operations.TranslateTextResponse>;
    /**
     * Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates a previously created parallel data resource by importing a new input file from Amazon S3.
     */
    updateParallelData(req: operations.UpdateParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateParallelDataResponse>;
}
