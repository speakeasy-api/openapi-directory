import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSitemapsSamplesSitemapsOnlyPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetSitemapsSamplesSitemapsOnlyQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetSitemapsSamplesSitemapsOnly200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: string[];
    size?: number;
}
export declare class GetSitemapsSamplesSitemapsOnlyRequest extends SpeakeasyBase {
    pathParams: GetSitemapsSamplesSitemapsOnlyPathParams;
    queryParams: GetSitemapsSamplesSitemapsOnlyQueryParams;
}
export declare class GetSitemapsSamplesSitemapsOnlyResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getSitemapsSamplesSitemapsOnly200ApplicationJSONObject?: GetSitemapsSamplesSitemapsOnly200ApplicationJson;
}
