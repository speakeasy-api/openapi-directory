import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConnectorsRequestBody extends SpeakeasyBase {
    chargestation?: string;
    format?: string;
    power?: number;
    powerType?: string;
    rate?: string;
    type?: string;
}
export declare class PostConnectors200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostConnectorsRequest extends SpeakeasyBase {
    request: PostConnectorsRequestBody;
}
export declare class PostConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postConnectors200ApplicationJSONObject?: PostConnectors200ApplicationJson;
}
