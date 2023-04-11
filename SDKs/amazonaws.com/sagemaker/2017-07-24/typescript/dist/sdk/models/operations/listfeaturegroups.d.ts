import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFeatureGroupsXAmzTargetEnum {
    SageMakerListFeatureGroups = "SageMaker.ListFeatureGroups"
}
export declare class ListFeatureGroupsRequest extends SpeakeasyBase {
    listFeatureGroupsRequest: shared.ListFeatureGroupsRequest;
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
    xAmzTarget: ListFeatureGroupsXAmzTargetEnum;
}
export declare class ListFeatureGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listFeatureGroupsResponse?: shared.ListFeatureGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
