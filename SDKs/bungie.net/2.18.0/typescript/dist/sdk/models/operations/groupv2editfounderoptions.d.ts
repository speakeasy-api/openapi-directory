import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupV2EditFounderOptionsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2EditFounderOptionsRequest extends SpeakeasyBase {
    /**
     * Group ID of the group to edit.
     */
    groupId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2EditFounderOptions200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: number;
    throttleSeconds?: number;
}
export declare class GroupV2EditFounderOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
