import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListClassesStateEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived"
}


export class ListClassesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: ListClassesStateEnum;
}


export class ListClassesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListClassesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListClassesQueryParams;

  @SpeakeasyMetadata()
  security: ListClassesSecurity;
}


export class ListClassesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClassDetails })
  classDetails?: shared.ClassDetails[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
