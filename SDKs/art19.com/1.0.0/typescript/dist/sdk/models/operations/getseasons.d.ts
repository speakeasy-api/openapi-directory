import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSeasonsSortEnum {
    CreatedAt = "created_at",
    SortTitle = "sort_title",
    Title = "title",
    UpdatedAt = "updated_at"
}
export declare class GetSeasonsQueryParams extends SpeakeasyBase {
    ids?: string[];
    pageNumber?: number;
    pageSize?: number;
    q?: string;
    seriesId?: string;
    sort?: GetSeasonsSortEnum[];
}
export declare class GetSeasons200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Season[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetSeasons400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetSeasons400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetSeasons400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetSeasons400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetSeasons400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetSeasonsRequest extends SpeakeasyBase {
    queryParams: GetSeasonsQueryParams;
}
export declare class GetSeasonsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getSeasons200ApplicationVndApiPlusJsonObject?: GetSeasons200ApplicationVndApiPlusJson;
    getSeasons400ApplicationVndApiPlusJsonObject?: GetSeasons400ApplicationVndApiPlusJson;
}
