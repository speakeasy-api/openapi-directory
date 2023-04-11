import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupV2AbdicateFoundershipRequest extends SpeakeasyBase {
    /**
     * The new founder for this group. Must already be a group admin.
     */
    founderIdNew: number;
    /**
     * The target group id.
     */
    groupId: number;
    /**
     * Membership type of the provided founderIdNew.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2AbdicateFoundership200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class GroupV2AbdicateFoundershipResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
