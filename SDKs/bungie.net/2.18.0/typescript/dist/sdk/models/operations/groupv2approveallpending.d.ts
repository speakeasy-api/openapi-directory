import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2ApproveAllPendingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2ApproveAllPendingRequest extends SpeakeasyBase {
    /**
     * ID of the group.
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2ApproveAllPending200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.EntitiesEntityActionResult[];
    throttleSeconds?: number;
}
export declare class GroupV2ApproveAllPendingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
