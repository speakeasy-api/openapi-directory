import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchUpdateDevicePositionRequestBody extends SpeakeasyBase {
    /**
     * Contains the position update details for each device.
     */
    updates: shared.DevicePositionUpdate[];
}
export declare class BatchUpdateDevicePositionRequest extends SpeakeasyBase {
    requestBody: BatchUpdateDevicePositionRequestBody;
    /**
     * The name of the tracker resource to update.
     */
    trackerName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpdateDevicePositionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchUpdateDevicePositionResponse?: shared.BatchUpdateDevicePositionResponse;
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
