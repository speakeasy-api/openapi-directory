import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedFiltersPathParams extends SpeakeasyBase {
    projectSlug: string;
    username: string;
}
export declare class GetSavedFiltersQueryParams extends SpeakeasyBase {
    page?: number;
    size?: number;
}
export declare class GetSavedFilters200ApplicationJson extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.ProjectSavedFilter[];
    size?: number;
}
export declare class GetSavedFiltersRequest extends SpeakeasyBase {
    pathParams: GetSavedFiltersPathParams;
    queryParams: GetSavedFiltersQueryParams;
}
export declare class GetSavedFiltersResponse extends SpeakeasyBase {
    contentType: string;
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    getSavedFilters200ApplicationJSONObject?: GetSavedFilters200ApplicationJson;
}
