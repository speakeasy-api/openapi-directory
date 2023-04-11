import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InviteToTopicRequestBody extends SpeakeasyBase {
    email?: string;
    user?: string;
}
export declare class InviteToTopicRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: InviteToTopicRequestBody;
    id: string;
}
export declare class InviteToTopic200ApplicationJSONUser extends SpeakeasyBase {
    avatarTemplate?: string;
    id?: number;
    name?: string;
    username?: string;
}
/**
 * topic updated
 */
export declare class InviteToTopic200ApplicationJSON extends SpeakeasyBase {
    user?: InviteToTopic200ApplicationJSONUser;
}
export declare class InviteToTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * topic updated
     */
    inviteToTopic200ApplicationJSONObject?: InviteToTopic200ApplicationJSON;
}
