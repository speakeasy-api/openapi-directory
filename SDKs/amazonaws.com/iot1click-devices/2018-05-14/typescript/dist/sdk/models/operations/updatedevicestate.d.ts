import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceStateRequestBody extends SpeakeasyBase {
    /**
     * If true, the device is enabled. If false, the device is
     *
     * @remarks
     *  disabled.
     */
    enabled?: boolean;
}
export declare class UpdateDeviceStateRequest extends SpeakeasyBase {
    requestBody: UpdateDeviceStateRequestBody;
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
export declare class UpdateDeviceStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateDeviceStateResponse?: Record<string, any>;
}
