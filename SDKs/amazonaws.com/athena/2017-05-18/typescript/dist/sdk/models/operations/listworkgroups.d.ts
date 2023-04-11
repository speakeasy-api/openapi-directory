import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListWorkGroupsXAmzTargetEnum {
    AmazonAthenaListWorkGroups = "AmazonAthena.ListWorkGroups"
}
export declare class ListWorkGroupsRequest extends SpeakeasyBase {
    listWorkGroupsInput: shared.ListWorkGroupsInput;
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
    xAmzTarget: ListWorkGroupsXAmzTargetEnum;
}
export declare class ListWorkGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listWorkGroupsOutput?: shared.ListWorkGroupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
