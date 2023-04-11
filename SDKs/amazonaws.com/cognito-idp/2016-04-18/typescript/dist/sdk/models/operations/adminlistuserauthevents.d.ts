import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AdminListUserAuthEventsXAmzTargetEnum {
    AWSCognitoIdentityProviderServiceAdminListUserAuthEvents = "AWSCognitoIdentityProviderService.AdminListUserAuthEvents"
}
export declare class AdminListUserAuthEventsRequest extends SpeakeasyBase {
    adminListUserAuthEventsRequest: shared.AdminListUserAuthEventsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: AdminListUserAuthEventsXAmzTargetEnum;
}
export declare class AdminListUserAuthEventsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminListUserAuthEventsResponse?: shared.AdminListUserAuthEventsResponse;
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
    /**
     * UserPoolAddOnNotEnabledException
     */
    userPoolAddOnNotEnabledException?: any;
}
