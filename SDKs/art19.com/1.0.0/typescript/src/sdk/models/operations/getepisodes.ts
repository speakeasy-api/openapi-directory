import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetEpisodesSortEnum {
    CreatedAt = "created_at",
    EarliestReleasedAt = "earliest_released_at",
    ReleasedAt = "released_at",
    ReleasedOrCreatedAt = "released_or_created_at",
    SortTitle = "sort_title",
    Title = "title",
    UpdatedAt = "updated_at"
}


export class GetEpisodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids[]" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=included_in_inventory_calendar" })
  includedInInventoryCalendar?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=released_after" })
  releasedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=released_before" })
  releasedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rss" })
  rss?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=season_id" })
  seasonId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=series_id" })
  seriesId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: GetEpisodesSortEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetEpisodes200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Episode })
  data?: shared.Episode[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Links;
}


// GetEpisodes400ApplicationVndApiPlusJsonErrorsSource
/** 
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
export class GetEpisodes400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


export class GetEpisodes400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetEpisodes400ApplicationVndApiPlusJsonErrorsSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetEpisodes400ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetEpisodes400ApplicationVndApiPlusJsonErrors })
  errors?: GetEpisodes400ApplicationVndApiPlusJsonErrors[];
}


export class GetEpisodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEpisodesQueryParams;
}


export class GetEpisodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEpisodes200ApplicationVndApiPlusJsonObject?: GetEpisodes200ApplicationVndApiPlusJson;

  @SpeakeasyMetadata()
  getEpisodes400ApplicationVndApiPlusJsonObject?: GetEpisodes400ApplicationVndApiPlusJson;
}
