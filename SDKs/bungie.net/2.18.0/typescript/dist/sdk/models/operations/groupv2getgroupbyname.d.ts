import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2GetGroupByNameRequest extends SpeakeasyBase {
    /**
     * Exact name of the group to find.
     */
    groupName: string;
    /**
     * Type of group to find.
     */
    groupType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2GetGroupByName200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GroupResponse;
    throttleSeconds?: number;
}
export declare class GroupV2GetGroupByNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
