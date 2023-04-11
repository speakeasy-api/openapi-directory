import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDeleteGeofenceRequestBody extends SpeakeasyBase {
    /**
     * The batch of geofences to be deleted.
     */
    geofenceIds: string[];
}
export declare class BatchDeleteGeofenceRequest extends SpeakeasyBase {
    /**
     * The geofence collection storing the geofences to be deleted.
     */
    collectionName: string;
    requestBody: BatchDeleteGeofenceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteGeofenceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchDeleteGeofenceResponse?: shared.BatchDeleteGeofenceResponse;
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
