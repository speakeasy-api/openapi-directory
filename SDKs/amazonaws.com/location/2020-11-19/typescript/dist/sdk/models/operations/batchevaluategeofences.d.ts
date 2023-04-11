import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchEvaluateGeofencesRequestBody extends SpeakeasyBase {
    /**
     * Contains device details for each device to be evaluated against the given geofence collection.
     */
    devicePositionUpdates: shared.DevicePositionUpdate[];
}
export declare class BatchEvaluateGeofencesRequest extends SpeakeasyBase {
    /**
     * The geofence collection used in evaluating the position of devices against its geofences.
     */
    collectionName: string;
    requestBody: BatchEvaluateGeofencesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchEvaluateGeofencesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchEvaluateGeofencesResponse?: shared.BatchEvaluateGeofencesResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
