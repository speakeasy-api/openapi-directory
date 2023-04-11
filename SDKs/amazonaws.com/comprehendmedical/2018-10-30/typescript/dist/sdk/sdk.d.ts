import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://comprehendmedical.{region}.amazonaws.com", "https://comprehendmedical.{region}.amazonaws.com", "http://comprehendmedical.{region}.amazonaws.com.cn", "https://comprehendmedical.{region}.amazonaws.com.cn"];
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
 *  Comprehend Medical; extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents.
 *
 * @see {@link https://docs.aws.amazon.com/comprehendmedical/} - Amazon Web Services documentation
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
     * Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
     */
    describeEntitiesDetectionV2Job(req: operations.DescribeEntitiesDetectionV2JobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntitiesDetectionV2JobResponse>;
    /**
     * Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
     */
    describeIcd10CMInferenceJob(req: operations.DescribeIcd10CMInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIcd10CMInferenceJobResponse>;
    /**
     * Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
     */
    describePHIDetectionJob(req: operations.DescribePHIDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribePHIDetectionJobResponse>;
    /**
     * Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
     */
    describeRxNormInferenceJob(req: operations.DescribeRxNormInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRxNormInferenceJobResponse>;
    /**
     *  Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job.
     */
    describeSNOMEDCTInferenceJob(req: operations.DescribeSNOMEDCTInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSNOMEDCTInferenceJobResponse>;
    /**
     * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
     */
    detectEntities(req: operations.DetectEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DetectEntitiesResponse>;
    /**
     * <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
     */
    detectEntitiesV2(req: operations.DetectEntitiesV2Request, config?: AxiosRequestConfig): Promise<operations.DetectEntitiesV2Response>;
    /**
     *  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
     */
    detectPHI(req: operations.DetectPHIRequest, config?: AxiosRequestConfig): Promise<operations.DetectPHIResponse>;
    /**
     * InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts.
     */
    inferIcd10CM(req: operations.InferIcd10CMRequest, config?: AxiosRequestConfig): Promise<operations.InferIcd10CMResponse>;
    /**
     * InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts.
     */
    inferRxNorm(req: operations.InferRxNormRequest, config?: AxiosRequestConfig): Promise<operations.InferRxNormResponse>;
    /**
     *  InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology
     */
    inferSNOMEDCT(req: operations.InferSNOMEDCTRequest, config?: AxiosRequestConfig): Promise<operations.InferSNOMEDCTResponse>;
    /**
     * Gets a list of medical entity detection jobs that you have submitted.
     */
    listEntitiesDetectionV2Jobs(req: operations.ListEntitiesDetectionV2JobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesDetectionV2JobsResponse>;
    /**
     * Gets a list of InferICD10CM jobs that you have submitted.
     */
    listIcd10CMInferenceJobs(req: operations.ListIcd10CMInferenceJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListIcd10CMInferenceJobsResponse>;
    /**
     * Gets a list of protected health information (PHI) detection jobs that you have submitted.
     */
    listPHIDetectionJobs(req: operations.ListPHIDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListPHIDetectionJobsResponse>;
    /**
     * Gets a list of InferRxNorm jobs that you have submitted.
     */
    listRxNormInferenceJobs(req: operations.ListRxNormInferenceJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListRxNormInferenceJobsResponse>;
    /**
     *  Gets a list of InferSNOMEDCT jobs a user has submitted.
     */
    listSNOMEDCTInferenceJobs(req: operations.ListSNOMEDCTInferenceJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListSNOMEDCTInferenceJobsResponse>;
    /**
     * Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
     */
    startEntitiesDetectionV2Job(req: operations.StartEntitiesDetectionV2JobRequest, config?: AxiosRequestConfig): Promise<operations.StartEntitiesDetectionV2JobResponse>;
    /**
     * Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
     */
    startIcd10CMInferenceJob(req: operations.StartIcd10CMInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StartIcd10CMInferenceJobResponse>;
    /**
     * Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
     */
    startPHIDetectionJob(req: operations.StartPHIDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartPHIDetectionJobResponse>;
    /**
     * Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
     */
    startRxNormInferenceJob(req: operations.StartRxNormInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StartRxNormInferenceJobResponse>;
    /**
     *  Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job.
     */
    startSNOMEDCTInferenceJob(req: operations.StartSNOMEDCTInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StartSNOMEDCTInferenceJobResponse>;
    /**
     * Stops a medical entities detection job in progress.
     */
    stopEntitiesDetectionV2Job(req: operations.StopEntitiesDetectionV2JobRequest, config?: AxiosRequestConfig): Promise<operations.StopEntitiesDetectionV2JobResponse>;
    /**
     * Stops an InferICD10CM inference job in progress.
     */
    stopIcd10CMInferenceJob(req: operations.StopIcd10CMInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StopIcd10CMInferenceJobResponse>;
    /**
     * Stops a protected health information (PHI) detection job in progress.
     */
    stopPHIDetectionJob(req: operations.StopPHIDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopPHIDetectionJobResponse>;
    /**
     * Stops an InferRxNorm inference job in progress.
     */
    stopRxNormInferenceJob(req: operations.StopRxNormInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StopRxNormInferenceJobResponse>;
    /**
     *  Stops an InferSNOMEDCT inference job in progress.
     */
    stopSNOMEDCTInferenceJob(req: operations.StopSNOMEDCTInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StopSNOMEDCTInferenceJobResponse>;
}
