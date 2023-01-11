import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PurgeCdnCachePathParams extends SpeakeasyBase {
    cdnId: string;
}
export declare class PurgeCdnCacheRequestBody extends SpeakeasyBase {
    files: string[];
}
export declare class PurgeCdnCache401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PurgeCdnCacheRequest extends SpeakeasyBase {
    pathParams: PurgeCdnCachePathParams;
    request: PurgeCdnCacheRequestBody;
}
export declare class PurgeCdnCacheResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    purgeCdnCache401ApplicationJSONObject?: PurgeCdnCache401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
