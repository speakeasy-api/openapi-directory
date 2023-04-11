import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminListGroupsForUserXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminListGroupsForUser = "AWSCognitoIdentityProviderService.AdminListGroupsForUser"
}
export declare class AdminListGroupsForUserRequest extends SpeakeasyBase {
    adminListGroupsForUserRequest: shared.AdminListGroupsForUserRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: AdminListGroupsForUserXAmzTargetEnum;
}
export declare class AdminListGroupsForUserResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminListGroupsForUserResponse?: shared.AdminListGroupsForUserResponse;
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
    /**
     * UserNotFoundException
     */
    userNotFoundException?: any;
}
