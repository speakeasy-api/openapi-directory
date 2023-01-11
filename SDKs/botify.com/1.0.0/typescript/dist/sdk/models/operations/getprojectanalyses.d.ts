import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectAnalysesPathParams extends SpeakeasyBase {
    projectSlug: string;
    username: string;
}
export declare class GetProjectAnalysesQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetProjectAnalyses200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.Analysis[];
    size?: number;
}
export declare class GetProjectAnalysesRequest extends SpeakeasyBase {
    pathParams: GetProjectAnalysesPathParams;
    queryParams: GetProjectAnalysesQueryParams;
}
export declare class GetProjectAnalysesResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getProjectAnalyses200ApplicationJSONObject?: GetProjectAnalyses200ApplicationJson;
}
