import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigurationsRequestBody extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class PostConfigurations201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostConfigurationsRequest extends SpeakeasyBase {
    request: PostConfigurationsRequestBody;
}
export declare class PostConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postConfigurations201ApplicationJSONObject?: PostConfigurations201ApplicationJson;
}
