import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListUsersInGroupXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceListUsersInGroup = "AWSCognitoIdentityProviderService.ListUsersInGroup"
}
export declare class ListUsersInGroupRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listUsersInGroupRequest: shared.ListUsersInGroupRequest;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUsersInGroupXAmzTargetEnum;
}
export declare class ListUsersInGroupResponse extends SpeakeasyBase {
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
     * Success
     */
    listUsersInGroupResponse?: shared.ListUsersInGroupResponse;
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
