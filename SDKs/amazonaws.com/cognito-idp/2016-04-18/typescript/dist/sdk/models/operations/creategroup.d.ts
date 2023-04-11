import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGroupXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceCreateGroup = "AWSCognitoIdentityProviderService.CreateGroup"
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    createGroupRequest: shared.CreateGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGroupXAmzTargetEnum;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGroupResponse?: shared.CreateGroupResponse;
    /**
     * GroupExistsException
     */
    groupExistsException?: any;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
