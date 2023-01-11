import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivateClassPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class ActivateClassSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ActivateClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivateClassPathParams;

  @SpeakeasyMetadata()
  security: ActivateClassSecurity;
}


export class ActivateClassResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classDetails?: shared.ClassDetails;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
