import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class PostDriversRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PostDriversRequestBodyAddress;
    email?: string;
    firstname: string;
    lastname: string;
    phone?: PostDriversRequestBodyPhone;
    source: PostDriversRequestBodySourceEnum;
}
export declare class PostDrivers200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostDriversRequest extends SpeakeasyBase {
    request: PostDriversRequestBody;
}
export declare class PostDriversResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postDrivers200ApplicationJSONObject?: PostDrivers200ApplicationJson;
}
