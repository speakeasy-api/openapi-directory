import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The device method to invoke.
 */
export declare class InvokeDeviceMethodRequestBodyDeviceMethod extends SpeakeasyBase {
    deviceType?: string;
    methodName?: string;
}
export declare class InvokeDeviceMethodRequestBody extends SpeakeasyBase {
    /**
     * The device method to invoke.
     */
    deviceMethod?: InvokeDeviceMethodRequestBodyDeviceMethod;
    /**
     * A JSON encoded string containing the device method request parameters.
     */
    deviceMethodParameters?: string;
}
export declare class InvokeDeviceMethodRequest extends SpeakeasyBase {
    requestBody: InvokeDeviceMethodRequestBody;
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
export declare class InvokeDeviceMethodResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    invokeDeviceMethodResponse?: shared.InvokeDeviceMethodResponse;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    /**
     * RangeNotSatisfiableException
     */
    rangeNotSatisfiableException?: any;
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
