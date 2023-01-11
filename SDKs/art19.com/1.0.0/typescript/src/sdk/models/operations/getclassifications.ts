import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetClassificationsSortEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Value = "value"
}

export enum GetClassificationsTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}


export class GetClassificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids[]" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_country" })
  isCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: GetClassificationsSortEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetClassificationsTypeEnum;
}


export class GetClassifications200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Classification })
  data?: shared.Classification[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Links;
}


// GetClassifications400ApplicationVndApiPlusJsonErrorsSource
/** 
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
export class GetClassifications400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


export class GetClassifications400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetClassifications400ApplicationVndApiPlusJsonErrorsSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetClassifications400ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetClassifications400ApplicationVndApiPlusJsonErrors })
  errors?: GetClassifications400ApplicationVndApiPlusJsonErrors[];
}


export class GetClassificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetClassificationsQueryParams;
}


export class GetClassificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClassifications200ApplicationVndApiPlusJsonObject?: GetClassifications200ApplicationVndApiPlusJson;

  @SpeakeasyMetadata()
  getClassifications400ApplicationVndApiPlusJsonObject?: GetClassifications400ApplicationVndApiPlusJson;
}
