import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: string;
}


export class GetGroupDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetGroupDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupDetailsPathParams;

  @SpeakeasyMetadata()
  security: GetGroupDetailsSecurity;
}


export class GetGroupDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  groupDetails?: shared.GroupDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
