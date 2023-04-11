import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminGetDeviceXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminGetDevice = "AWSCognitoIdentityProviderService.AdminGetDevice"
}
export declare class AdminGetDeviceRequest extends SpeakeasyBase {
    adminGetDeviceRequest: shared.AdminGetDeviceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminGetDeviceXAmzTargetEnum;
}
export declare class AdminGetDeviceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminGetDeviceResponse?: shared.AdminGetDeviceResponse;
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidUserPoolConfigurationException
     */
    invalidUserPoolConfigurationException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
