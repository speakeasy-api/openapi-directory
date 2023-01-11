import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinksTopDomainsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare class GetLinksTopDomainsQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetLinksTopDomains200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.LinksTopDomains[];
    size?: number;
}
export declare class GetLinksTopDomainsRequest extends SpeakeasyBase {
    pathParams: GetLinksTopDomainsPathParams;
    queryParams: GetLinksTopDomainsQueryParams;
}
export declare class GetLinksTopDomainsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getLinksTopDomains200ApplicationJSONObject?: GetLinksTopDomains200ApplicationJson;
}
