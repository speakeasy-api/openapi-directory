import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2GetAdminsAndFounderOfGroupRequest extends SpeakeasyBase {
    /**
     * Page number (starting with 1). Each page has a fixed size of 50 items per page.
     */
    currentpage: number;
    /**
     * The ID of the group.
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2GetAdminsAndFounderOfGroup200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfGroupMember;
    throttleSeconds?: number;
}
export declare class GroupV2GetAdminsAndFounderOfGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
