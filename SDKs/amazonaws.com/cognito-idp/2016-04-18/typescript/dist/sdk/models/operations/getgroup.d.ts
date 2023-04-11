import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetGroupXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceGetGroup = "AWSCognitoIdentityProviderService.GetGroup"
}
export declare class GetGroupRequest extends SpeakeasyBase {
    getGroupRequest: shared.GetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGroupXAmzTargetEnum;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getGroupResponse?: shared.GetGroupResponse;
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
