import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPrincipalTagAttributeMapXAmzTargetEnum {
    AWSCognitoIdentityServiceGetPrincipalTagAttributeMap = "AWSCognitoIdentityService.GetPrincipalTagAttributeMap"
}
export declare class GetPrincipalTagAttributeMapRequest extends SpeakeasyBase {
    getPrincipalTagAttributeMapInput: shared.GetPrincipalTagAttributeMapInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPrincipalTagAttributeMapXAmzTargetEnum;
}
export declare class GetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getPrincipalTagAttributeMapResponse?: shared.GetPrincipalTagAttributeMapResponse;
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
