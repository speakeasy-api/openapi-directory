import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InitiateDeviceClaimRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the device.
     */
    deviceId: string;
}
export declare class InitiateDeviceClaimResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    initiateDeviceClaimResponse?: shared.InitiateDeviceClaimResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
