import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchPutGeofenceRequestBody extends SpeakeasyBase {
    /**
     * The batch of geofences to be stored in a geofence collection.
     */
    entries: shared.BatchPutGeofenceRequestEntry[];
}
export declare class BatchPutGeofenceRequest extends SpeakeasyBase {
    /**
     * The geofence collection storing the geofences.
     */
    collectionName: string;
    requestBody: BatchPutGeofenceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchPutGeofenceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchPutGeofenceResponse?: shared.BatchPutGeofenceResponse;
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
