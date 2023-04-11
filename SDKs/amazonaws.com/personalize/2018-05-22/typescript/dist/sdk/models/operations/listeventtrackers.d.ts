import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEventTrackersXAmzTargetEnum {
    AmazonPersonalizeListEventTrackers = "AmazonPersonalize.ListEventTrackers"
}
export declare class ListEventTrackersRequest extends SpeakeasyBase {
    listEventTrackersRequest: shared.ListEventTrackersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventTrackersXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListEventTrackersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listEventTrackersResponse?: shared.ListEventTrackersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
