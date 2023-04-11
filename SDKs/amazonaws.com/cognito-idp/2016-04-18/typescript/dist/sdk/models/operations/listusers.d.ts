import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListUsersXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceListUsers = "AWSCognitoIdentityProviderService.ListUsers"
}
export declare class ListUsersRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listUsersRequest: shared.ListUsersRequest;
    /**
     * Pagination token
     */
    paginationToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUsersXAmzTargetEnum;
}
export declare class ListUsersResponse extends SpeakeasyBase {
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
    listUsersResponse?: shared.ListUsersResponse;
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
