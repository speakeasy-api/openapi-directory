import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLineageGroupsXAmzTargetEnum {
    SageMakerListLineageGroups = "SageMaker.ListLineageGroups"
}
export declare class ListLineageGroupsRequest extends SpeakeasyBase {
    listLineageGroupsRequest: shared.ListLineageGroupsRequest;
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
    xAmzTarget: ListLineageGroupsXAmzTargetEnum;
}
export declare class ListLineageGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listLineageGroupsResponse?: shared.ListLineageGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
