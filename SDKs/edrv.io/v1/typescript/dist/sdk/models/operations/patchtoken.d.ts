import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchTokenRequestBodyChannelEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}
/**
 * Include token properties to create here
 */
export declare class PatchTokenRequestBody extends SpeakeasyBase {
    active?: boolean;
    channel?: PatchTokenRequestBodyChannelEnum;
    driver?: string;
    physicalId?: string;
    type?: string;
}
export declare class PatchTokenRequest extends SpeakeasyBase {
    /**
     * Include token properties to create here
     */
    requestBody: PatchTokenRequestBody;
    /**
     * ID of token that needs to be updated
     */
    id: string;
}
/**
 * Returns the updated token
 */
export declare class PatchToken201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PatchTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the updated token
     */
    patchToken201ApplicationJSONObject?: PatchToken201ApplicationJSON;
}
