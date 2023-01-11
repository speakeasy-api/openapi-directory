import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUrlsAggsPathParams extends SpeakeasyBase {
    projectSlug: string;
    username: string;
}
export declare enum GetProjectUrlsAggsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new"
}
export declare class GetProjectUrlsAggsQueryParams extends SpeakeasyBase {
    area?: GetProjectUrlsAggsAreaEnum;
    lastAnalysisSlug?: string;
    nbAnalyses?: number;
}
export declare class GetProjectUrlsAggsRequest extends SpeakeasyBase {
    pathParams: GetProjectUrlsAggsPathParams;
    queryParams: GetProjectUrlsAggsQueryParams;
    request?: shared.UrlsAggsQuery[];
}
export declare class GetProjectUrlsAggsResponse extends SpeakeasyBase {
    contentType: string;
    default?: Record<string, any>;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
}
