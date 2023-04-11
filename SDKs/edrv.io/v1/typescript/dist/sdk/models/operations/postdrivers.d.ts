import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostDriversRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    streetAndNumber?: string;
}
export declare class PostDriversRequestBodyPhone extends SpeakeasyBase {
    home?: string;
    mobile?: string;
    work?: string;
}
export declare enum PostDriversRequestBodySourceEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}
/**
 * Include driver properties to create here
 */
export declare class PostDriversRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PostDriversRequestBodyAddress;
    email?: string;
    firstname: string;
    lastname: string;
    phone?: PostDriversRequestBodyPhone;
    source: PostDriversRequestBodySourceEnum;
}
/**
 * Returns the newly created driver object
 */
export declare class PostDrivers200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostDriversResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the newly created driver object
     */
    postDrivers200ApplicationJSONObject?: PostDrivers200ApplicationJSON;
}
