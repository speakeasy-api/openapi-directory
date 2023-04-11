import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListGroupsXAmzTargetEnum {
    WorkMailServiceListGroups = "WorkMailService.ListGroups"
}
export declare class ListGroupsRequest extends SpeakeasyBase {
    listGroupsRequest: shared.ListGroupsRequest;
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
    xAmzTarget: ListGroupsXAmzTargetEnum;
}
export declare class ListGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listGroupsResponse?: shared.ListGroupsResponse;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
