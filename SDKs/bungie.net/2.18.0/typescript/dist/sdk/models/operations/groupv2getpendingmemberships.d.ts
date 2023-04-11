import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2GetPendingMembershipsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2GetPendingMembershipsRequest extends SpeakeasyBase {
    /**
     * Page number (starting with 1). Each page has a fixed size of 50 items per page.
     */
    currentpage: number;
    /**
     * ID of the group.
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2GetPendingMemberships200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfGroupMemberApplication;
    throttleSeconds?: number;
}
export declare class GroupV2GetPendingMembershipsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
