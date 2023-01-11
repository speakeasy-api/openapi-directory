import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEpisodesSortEnum {
    CreatedAt = "created_at",
    EarliestReleasedAt = "earliest_released_at",
    ReleasedAt = "released_at",
    ReleasedOrCreatedAt = "released_or_created_at",
    SortTitle = "sort_title",
    Title = "title",
    UpdatedAt = "updated_at"
}
export declare class GetEpisodesQueryParams extends SpeakeasyBase {
    ids?: string[];
    includedInInventoryCalendar?: string;
    month?: string;
    pageNumber: number;
    pageSize: number;
    published?: boolean;
    q?: string;
    releasedAfter?: Date;
    releasedBefore?: Date;
    rss?: boolean;
    seasonId?: string;
    seriesId?: string;
    sort?: GetEpisodesSortEnum[];
    year?: string;
}
export declare class GetEpisodes200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetEpisodes400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetEpisodes400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetEpisodes400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetEpisodes400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetEpisodes400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetEpisodesRequest extends SpeakeasyBase {
    queryParams: GetEpisodesQueryParams;
}
export declare class GetEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getEpisodes200ApplicationVndApiPlusJsonObject?: GetEpisodes200ApplicationVndApiPlusJson;
    getEpisodes400ApplicationVndApiPlusJsonObject?: GetEpisodes400ApplicationVndApiPlusJson;
}
