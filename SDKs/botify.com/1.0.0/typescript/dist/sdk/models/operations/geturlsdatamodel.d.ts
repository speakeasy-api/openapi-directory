import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUrlsDatamodelPathParams extends SpeakeasyBase {
    analysisSlug: string;
    projectSlug: string;
    username: string;
}
export declare enum GetUrlsDatamodelAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}
export declare class GetUrlsDatamodelQueryParams extends SpeakeasyBase {
    area?: GetUrlsDatamodelAreaEnum;
}
export declare class GetUrlsDatamodelRequest extends SpeakeasyBase {
    pathParams: GetUrlsDatamodelPathParams;
    queryParams: GetUrlsDatamodelQueryParams;
}
export declare class GetUrlsDatamodelResponse extends SpeakeasyBase {
    contentType: string;
    crawlDatamodel?: shared.CrawlDatamodel;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
}
