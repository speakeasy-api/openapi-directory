import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2GetRecommendedGroupsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2GetRecommendedGroupsRequest extends SpeakeasyBase {
    /**
     * Requested range in which to pull recommended groups
     */
    createDateRange: number;
    /**
     * Type of groups requested
     */
    groupType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2GetRecommendedGroups200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GroupV2Card[];
    throttleSeconds?: number;
}
export declare class GroupV2GetRecommendedGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
