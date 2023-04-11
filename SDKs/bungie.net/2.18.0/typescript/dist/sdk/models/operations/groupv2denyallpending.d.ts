import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2DenyAllPendingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2DenyAllPendingRequest extends SpeakeasyBase {
    /**
     * ID of the group.
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2DenyAllPending200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.EntitiesEntityActionResult[];
    throttleSeconds?: number;
}
export declare class GroupV2DenyAllPendingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
