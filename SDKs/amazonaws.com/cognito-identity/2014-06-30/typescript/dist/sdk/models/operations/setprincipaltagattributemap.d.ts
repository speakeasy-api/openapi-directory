import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetPrincipalTagAttributeMapXAmzTargetEnum {
    AWSCognitoIdentityServiceSetPrincipalTagAttributeMap = "AWSCognitoIdentityService.SetPrincipalTagAttributeMap"
}
export declare class SetPrincipalTagAttributeMapRequest extends SpeakeasyBase {
    setPrincipalTagAttributeMapInput: shared.SetPrincipalTagAttributeMapInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetPrincipalTagAttributeMapXAmzTargetEnum;
}
export declare class SetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    setPrincipalTagAttributeMapResponse?: shared.SetPrincipalTagAttributeMapResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
