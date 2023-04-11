import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminListDevicesXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminListDevices = "AWSCognitoIdentityProviderService.AdminListDevices"
}
export declare class AdminListDevicesRequest extends SpeakeasyBase {
    adminListDevicesRequest: shared.AdminListDevicesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminListDevicesXAmzTargetEnum;
}
export declare class AdminListDevicesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminListDevicesResponse?: shared.AdminListDevicesResponse;
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
}
