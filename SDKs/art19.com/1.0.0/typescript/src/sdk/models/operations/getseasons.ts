import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSeasonsSortEnum {
    CreatedAt = "created_at",
    SortTitle = "sort_title",
    Title = "title",
    UpdatedAt = "updated_at"
}


export class GetSeasonsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids[]" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=series_id" })
  seriesId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: GetSeasonsSortEnum[];
}


export class GetSeasons200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Season })
  data?: shared.Season[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Links;
}


// GetSeasons400ApplicationVndApiPlusJsonErrorsSource
/** 
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
export class GetSeasons400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


export class GetSeasons400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetSeasons400ApplicationVndApiPlusJsonErrorsSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetSeasons400ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetSeasons400ApplicationVndApiPlusJsonErrors })
  errors?: GetSeasons400ApplicationVndApiPlusJsonErrors[];
}


export class GetSeasonsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSeasonsQueryParams;
}


export class GetSeasonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSeasons200ApplicationVndApiPlusJsonObject?: GetSeasons200ApplicationVndApiPlusJson;

  @SpeakeasyMetadata()
  getSeasons400ApplicationVndApiPlusJsonObject?: GetSeasons400ApplicationVndApiPlusJson;
}
