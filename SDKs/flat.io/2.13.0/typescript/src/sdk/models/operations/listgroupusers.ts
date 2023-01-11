import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListGroupUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: string;
}

export enum ListGroupUsersSourceEnum {
    GoogleClassroom = "googleClassroom",
    MicrosoftGraph = "microsoftGraph",
    Clever = "clever"
}


export class ListGroupUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: ListGroupUsersSourceEnum;
}


export class ListGroupUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListGroupUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListGroupUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: ListGroupUsersQueryParams;

  @SpeakeasyMetadata()
  security: ListGroupUsersSecurity;
}


export class ListGroupUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserPublic })
  userPublics?: shared.UserPublic[];
}
