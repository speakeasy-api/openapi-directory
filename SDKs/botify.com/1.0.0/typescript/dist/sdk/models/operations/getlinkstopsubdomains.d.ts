import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinksTopSubdomainsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetLinksTopSubdomainsQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetLinksTopSubdomains200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.LinksTopDomains[];
    size?: number;
}
export declare class GetLinksTopSubdomainsRequest extends SpeakeasyBase {
    pathParams: GetLinksTopSubdomainsPathParams;
    queryParams: GetLinksTopSubdomainsQueryParams;
}
export declare class GetLinksTopSubdomainsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getLinksTopSubdomains200ApplicationJSONObject?: GetLinksTopSubdomains200ApplicationJson;
}
