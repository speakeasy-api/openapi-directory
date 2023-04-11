import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUserPoolMfaConfigXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGetUserPoolMfaConfig = "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig"
}
export declare class GetUserPoolMfaConfigRequest extends SpeakeasyBase {
    getUserPoolMfaConfigRequest: shared.GetUserPoolMfaConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserPoolMfaConfigXAmzTargetEnum;
}
export declare class GetUserPoolMfaConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getUserPoolMfaConfigResponse?: shared.GetUserPoolMfaConfigResponse;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
