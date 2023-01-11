import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSitemapsSamplesOutOfConfigPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetSitemapsSamplesOutOfConfigQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetSitemapsSamplesOutOfConfig200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: string[];
    size?: number;
}
export declare class GetSitemapsSamplesOutOfConfigRequest extends SpeakeasyBase {
    pathParams: GetSitemapsSamplesOutOfConfigPathParams;
    queryParams: GetSitemapsSamplesOutOfConfigQueryParams;
}
export declare class GetSitemapsSamplesOutOfConfigResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getSitemapsSamplesOutOfConfig200ApplicationJSONObject?: GetSitemapsSamplesOutOfConfig200ApplicationJson;
}
