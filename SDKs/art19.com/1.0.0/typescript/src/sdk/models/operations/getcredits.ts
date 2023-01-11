import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCreditsCreditableTypeEnum {
    Series = "Series",
    Season = "Season",
    Episode = "Episode"
}

export enum GetCreditsSortEnum {
    CreatedAt = "created_at",
    Position = "position",
    UpdatedAt = "updated_at"
}


export class GetCreditsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creditable_id" })
  creditableId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creditable_type" })
  creditableType?: GetCreditsCreditableTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids[]" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: GetCreditsSortEnum[];
}


export class GetCredits200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Credit })
  data?: shared.Credit[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Links;
}


// GetCredits400ApplicationVndApiPlusJsonErrorsSource
/** 
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
export class GetCredits400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


export class GetCredits400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetCredits400ApplicationVndApiPlusJsonErrorsSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetCredits400ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetCredits400ApplicationVndApiPlusJsonErrors })
  errors?: GetCredits400ApplicationVndApiPlusJsonErrors[];
}


export class GetCreditsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreditsQueryParams;
}


export class GetCreditsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCredits200ApplicationVndApiPlusJsonObject?: GetCredits200ApplicationVndApiPlusJson;

  @SpeakeasyMetadata()
  getCredits400ApplicationVndApiPlusJsonObject?: GetCredits400ApplicationVndApiPlusJson;
}
