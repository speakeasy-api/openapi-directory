import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClassPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class GetClassSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClassPathParams;

  @SpeakeasyMetadata()
  security: GetClassSecurity;
}


export class GetClassResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classDetails?: shared.ClassDetails;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
