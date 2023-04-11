import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDatasetGroupsXAmzTargetEnum {
    AmazonPersonalizeListDatasetGroups = "AmazonPersonalize.ListDatasetGroups"
}
export declare class ListDatasetGroupsRequest extends SpeakeasyBase {
    listDatasetGroupsRequest: shared.ListDatasetGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetGroupsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDatasetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listDatasetGroupsResponse?: shared.ListDatasetGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
