import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetIdentityPoolRolesXAmzTargetEnum {
    AWSCognitoIdentityServiceGetIdentityPoolRoles = "AWSCognitoIdentityService.GetIdentityPoolRoles"
}
export declare class GetIdentityPoolRolesRequest extends SpeakeasyBase {
    getIdentityPoolRolesInput: shared.GetIdentityPoolRolesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIdentityPoolRolesXAmzTargetEnum;
}
export declare class GetIdentityPoolRolesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getIdentityPoolRolesResponse?: shared.GetIdentityPoolRolesResponse;
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
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
