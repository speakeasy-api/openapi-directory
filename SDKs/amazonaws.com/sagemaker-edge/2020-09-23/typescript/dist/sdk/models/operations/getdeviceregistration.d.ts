import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeviceRegistrationRequestBody extends SpeakeasyBase {
    /**
     * The name of the fleet that the device belongs to.
     */
    deviceFleetName: string;
    /**
     * The unique name of the device you want to get the registration status from.
     */
    deviceName: string;
}
export declare class GetDeviceRegistrationRequest extends SpeakeasyBase {
    requestBody: GetDeviceRegistrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeviceRegistrationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDeviceRegistrationResult?: shared.GetDeviceRegistrationResult;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
