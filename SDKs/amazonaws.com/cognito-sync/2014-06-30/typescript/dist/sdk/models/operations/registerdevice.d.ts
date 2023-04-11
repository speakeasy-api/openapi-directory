import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).
 */
export declare enum RegisterDeviceRequestBodyPlatformEnum {
    Apns = "APNS",
    ApnsSandbox = "APNS_SANDBOX",
    Gcm = "GCM",
    Adm = "ADM"
}
export declare class RegisterDeviceRequestBody extends SpeakeasyBase {
    /**
     * The SNS platform type (e.g. GCM, SDM, APNS, APNS_SANDBOX).
     */
    platform: RegisterDeviceRequestBodyPlatformEnum;
    /**
     * The push token.
     */
    token: string;
}
export declare class RegisterDeviceRequest extends SpeakeasyBase {
    /**
     * The unique ID for this identity.
     */
    identityId: string;
    /**
     * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. Here, the ID of the pool that the identity belongs to.
     */
    identityPoolId: string;
    requestBody: RegisterDeviceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterDeviceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidConfigurationException
     */
    invalidConfigurationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * Success
     */
    registerDeviceResponse?: shared.RegisterDeviceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
