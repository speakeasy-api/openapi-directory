import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUrlsAggsPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare enum GetUrlsAggsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}
export declare class GetUrlsAggsQueryParams extends SpeakeasyBase {
    area?: GetUrlsAggsAreaEnum;
}
export declare class GetUrlsAggsRequest extends SpeakeasyBase {
    pathParams: GetUrlsAggsPathParams;
    queryParams: GetUrlsAggsQueryParams;
    request?: shared.UrlsAggsQuery[];
}
export declare class GetUrlsAggsResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getUrlsAggs200ApplicationJSONAnies?: any[];
}
