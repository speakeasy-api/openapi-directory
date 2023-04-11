import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminUpdateDeviceStatusXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminUpdateDeviceStatus = "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus"
}
export declare class AdminUpdateDeviceStatusRequest extends SpeakeasyBase {
    adminUpdateDeviceStatusRequest: shared.AdminUpdateDeviceStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUpdateDeviceStatusXAmzTargetEnum;
}
export declare class AdminUpdateDeviceStatusResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminUpdateDeviceStatusResponse?: Record<string, any>;
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
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
