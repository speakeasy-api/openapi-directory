import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://sagemaker-geospatial.{region}.amazonaws.com", "https://sagemaker-geospatial.{region}.amazonaws.com", "http://sagemaker-geospatial.{region}.amazonaws.com.cn", "https://sagemaker-geospatial.{region}.amazonaws.com.cn"];
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
 * Provides APIs for creating and managing SageMaker geospatial resources.
 *
 * @see {@link https://docs.aws.amazon.com/sagemaker-geospatial/} - Amazon Web Services documentation
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
     * Use this operation to delete an Earth Observation job.
     */
    deleteEarthObservationJob(req: operations.DeleteEarthObservationJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEarthObservationJobResponse>;
    /**
     * Use this operation to delete a Vector Enrichment job.
     */
    deleteVectorEnrichmentJob(req: operations.DeleteVectorEnrichmentJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVectorEnrichmentJobResponse>;
    /**
     * Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.
     */
    exportEarthObservationJob(req: operations.ExportEarthObservationJobRequest, config?: AxiosRequestConfig): Promise<operations.ExportEarthObservationJobResponse>;
    /**
     * Use this operation to copy results of a Vector Enrichment job to an S3 location.
     */
    exportVectorEnrichmentJob(req: operations.ExportVectorEnrichmentJobRequest, config?: AxiosRequestConfig): Promise<operations.ExportVectorEnrichmentJobResponse>;
    /**
     * Get the details for a previously initiated Earth Observation job.
     */
    getEarthObservationJob(req: operations.GetEarthObservationJobRequest, config?: AxiosRequestConfig): Promise<operations.GetEarthObservationJobResponse>;
    /**
     * Use this operation to get details of a specific raster data collection.
     */
    getRasterDataCollection(req: operations.GetRasterDataCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetRasterDataCollectionResponse>;
    /**
     * Gets a web mercator tile for the given Earth Observation job.
     */
    getTile(req: operations.GetTileRequest, config?: AxiosRequestConfig): Promise<operations.GetTileResponse>;
    /**
     * Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
     */
    getVectorEnrichmentJob(req: operations.GetVectorEnrichmentJobRequest, config?: AxiosRequestConfig): Promise<operations.GetVectorEnrichmentJobResponse>;
    /**
     * Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
     */
    listEarthObservationJobs(req: operations.ListEarthObservationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEarthObservationJobsResponse>;
    /**
     * Use this operation to get raster data collections.
     */
    listRasterDataCollections(req: operations.ListRasterDataCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListRasterDataCollectionsResponse>;
    /**
     * Lists the tags attached to the resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Retrieves a list of vector enrichment jobs.
     */
    listVectorEnrichmentJobs(req: operations.ListVectorEnrichmentJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListVectorEnrichmentJobsResponse>;
    /**
     * Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
     */
    searchRasterDataCollection(req: operations.SearchRasterDataCollectionRequest, config?: AxiosRequestConfig): Promise<operations.SearchRasterDataCollectionResponse>;
    /**
     * Use this operation to create an Earth observation job.
     */
    startEarthObservationJob(req: operations.StartEarthObservationJobRequest, config?: AxiosRequestConfig): Promise<operations.StartEarthObservationJobResponse>;
    /**
     * Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
     */
    startVectorEnrichmentJob(req: operations.StartVectorEnrichmentJobRequest, config?: AxiosRequestConfig): Promise<operations.StartVectorEnrichmentJobResponse>;
    /**
     * Use this operation to stop an existing earth observation job.
     */
    stopEarthObservationJob(req: operations.StopEarthObservationJobRequest, config?: AxiosRequestConfig): Promise<operations.StopEarthObservationJobResponse>;
    /**
     * Stops the Vector Enrichment job for a given job ARN.
     */
    stopVectorEnrichmentJob(req: operations.StopVectorEnrichmentJobRequest, config?: AxiosRequestConfig): Promise<operations.StopVectorEnrichmentJobResponse>;
    /**
     * The resource you want to tag.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * The resource you want to untag.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
