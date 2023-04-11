import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupV2ApprovePendingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2ApprovePendingRequest extends SpeakeasyBase {
    /**
     * ID of the group.
     */
    groupId: number;
    /**
     * The membership id being approved.
     */
    membershipId: number;
    /**
     * Membership type of the supplied membership ID.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2ApprovePending200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class GroupV2ApprovePendingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
