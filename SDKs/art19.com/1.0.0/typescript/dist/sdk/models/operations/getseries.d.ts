import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSeriesSortEnum {
    CreatedAt = "created_at",
    EpisodeReleasedAt = "episode_released_at",
    SortTitle = "sort_title",
    Title = "title",
    UpdatedAt = "updated_at"
}
export declare class GetSeriesQueryParams extends SpeakeasyBase {
    adRepAccountId?: string;
    ids?: string[];
    networkId?: string;
    pageNumber?: number;
    pageSize?: number;
    q?: string;
    sort?: GetSeriesSortEnum[];
}
export declare class GetSeries200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Series[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetSeries400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetSeries400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetSeries400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetSeries400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetSeries400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetSeriesRequest extends SpeakeasyBase {
    queryParams: GetSeriesQueryParams;
}
export declare class GetSeriesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getSeries200ApplicationVndApiPlusJsonObject?: GetSeries200ApplicationVndApiPlusJson;
    getSeries400ApplicationVndApiPlusJsonObject?: GetSeries400ApplicationVndApiPlusJson;
}
