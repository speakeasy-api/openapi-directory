import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can manage your Segments.
 *
 * @remarks
 * Segments allow you to group your users based on any of their properties. Define user segments and add them to multiple feature flags.
 */
export declare class Segments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Segment
     *
     * @remarks
     * This endpoint creates a new Segment in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    createSegment(req: operations.CreateSegmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateSegmentResponse>;
    /**
     * Delete Segment
     *
     * @remarks
     * This endpoint removes a Segment identified by the `segmentId` parameter.
     */
    deleteSegment(req: operations.DeleteSegmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSegmentResponse>;
    /**
     * Get Segment
     *
     * @remarks
     * This endpoint returns the metadata of a Segment
     * identified by the `segmentId`.
     */
    getSegment(req: operations.GetSegmentRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentResponse>;
    /**
     * List Segments
     *
     * @remarks
     * This endpoint returns the list of the Segments that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    getSegments(req: operations.GetSegmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSegmentsResponse>;
    /**
     * Update Segment
     *
     * @remarks
     * This endpoint updates a Segment identified by the `segmentId` parameter.
     */
    updateSegment(req: operations.UpdateSegmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSegmentResponse>;
}
