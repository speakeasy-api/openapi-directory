import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupV2GetUserClanInviteSettingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2GetUserClanInviteSettingRequest extends SpeakeasyBase {
    /**
     * The Destiny membership type of the account we wish to access settings.
     */
    mType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2GetUserClanInviteSetting200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class GroupV2GetUserClanInviteSettingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
