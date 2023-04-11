import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminSetUserSettingsXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminSetUserSettings = "AWSCognitoIdentityProviderService.AdminSetUserSettings"
}
export declare class AdminSetUserSettingsRequest extends SpeakeasyBase {
    adminSetUserSettingsRequest: shared.AdminSetUserSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminSetUserSettingsXAmzTargetEnum;
}
export declare class AdminSetUserSettingsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminSetUserSettingsResponse?: Record<string, any>;
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
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
