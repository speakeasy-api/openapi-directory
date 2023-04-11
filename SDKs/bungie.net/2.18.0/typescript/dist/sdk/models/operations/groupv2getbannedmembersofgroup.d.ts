import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2GetBannedMembersOfGroupSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2GetBannedMembersOfGroupRequest extends SpeakeasyBase {
    /**
     * Page number (starting with 1). Each page has a fixed size of 50 entries.
     */
    currentpage: number;
    /**
     * Group ID whose banned members you are fetching
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2GetBannedMembersOfGroup200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfGroupBan;
    throttleSeconds?: number;
}
export declare class GroupV2GetBannedMembersOfGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
