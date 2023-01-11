import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetClassificationInclusionsClassificationTypeEnum {
    AlternateFeedType = "AlternateFeedType",
    Genre = "Genre",
    Industry = "Industry",
    Language = "Language",
    MediaRating = "MediaRating"
}

export enum GetClassificationInclusionsClassifiedTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}

export enum GetClassificationInclusionsSortEnum {
    ClassificationValue = "classification_value",
    CreatedAt = "created_at",
    Position = "position"
}


export class GetClassificationInclusionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification_id" })
  classificationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification_type" })
  classificationType?: GetClassificationInclusionsClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classified_id" })
  classifiedId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classified_type" })
  classifiedType?: GetClassificationInclusionsClassifiedTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids[]" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: GetClassificationInclusionsSortEnum[];
}


export class GetClassificationInclusions200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ClassificationInclusion })
  data?: shared.ClassificationInclusion[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Links;
}


// GetClassificationInclusions400ApplicationVndApiPlusJsonErrorsSource
/** 
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
export class GetClassificationInclusions400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


export class GetClassificationInclusions400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetClassificationInclusions400ApplicationVndApiPlusJsonErrorsSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetClassificationInclusions400ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetClassificationInclusions400ApplicationVndApiPlusJsonErrors })
  errors?: GetClassificationInclusions400ApplicationVndApiPlusJsonErrors[];
}


export class GetClassificationInclusionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetClassificationInclusionsQueryParams;
}


export class GetClassificationInclusionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClassificationInclusions200ApplicationVndApiPlusJsonObject?: GetClassificationInclusions200ApplicationVndApiPlusJson;

  @SpeakeasyMetadata()
  getClassificationInclusions400ApplicationVndApiPlusJsonObject?: GetClassificationInclusions400ApplicationVndApiPlusJson;
}
