import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUrlsSuggestedFiltersPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare enum GetUrlsSuggestedFiltersAreaEnum {
    Current = "current",
    New = "new"
}
export declare class GetUrlsSuggestedFiltersQueryParams extends SpeakeasyBase {
    area?: GetUrlsSuggestedFiltersAreaEnum;
}
export declare class GetUrlsSuggestedFiltersRequest extends SpeakeasyBase {
    pathParams: GetUrlsSuggestedFiltersPathParams;
    queryParams: GetUrlsSuggestedFiltersQueryParams;
    request?: shared.UrlsAggsQuery;
}
export declare class GetUrlsSuggestedFiltersResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    urlsAggsQuery?: shared.UrlsAggsQuery;
}
