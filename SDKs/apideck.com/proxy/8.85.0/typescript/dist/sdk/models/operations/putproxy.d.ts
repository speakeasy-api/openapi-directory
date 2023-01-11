import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProxyHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckDownstreamAuthorization?: string;
    xApideckDownstreamUrl: string;
    xApideckServiceId: string;
}
export declare class PutProxySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PutProxy401ApplicationJson extends SpeakeasyBase {
    detail?: string;
    error?: string;
    message?: string;
    ref?: string;
    statusCode?: number;
    typeName?: string;
}
export declare class PutProxyRequest extends SpeakeasyBase {
    headers: PutProxyHeaders;
    request?: Uint8Array;
    security: PutProxySecurity;
}
export declare class PutProxyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    putProxy200ApplicationJSONAny?: any;
    putProxy401ApplicationJSONObject?: PutProxy401ApplicationJson;
    putProxyDefaultApplicationJSONAny?: any;
}
