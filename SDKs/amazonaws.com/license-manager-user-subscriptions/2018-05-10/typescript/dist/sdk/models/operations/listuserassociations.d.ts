import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about an identity provider.
 */
export declare class ListUserAssociationsRequestBodyIdentityProvider extends SpeakeasyBase {
    activeDirectoryIdentityProvider?: shared.ActiveDirectoryIdentityProvider;
}
export declare class ListUserAssociationsRequestBody extends SpeakeasyBase {
    /**
     * An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify.
     */
    filters?: shared.Filter[];
    /**
     * Details about an identity provider.
     */
    identityProvider: ListUserAssociationsRequestBodyIdentityProvider;
    /**
     * The ID of the EC2 instance, which provides user-based subscriptions.
     */
    instanceId: string;
    /**
     * Maximum number of results to return in a single call.
     */
    maxResults?: number;
    /**
     * Token for the next set of results.
     */
    nextToken?: string;
}
export declare class ListUserAssociationsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListUserAssociationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListUserAssociationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listUserAssociationsResponse?: shared.ListUserAssociationsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
