import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnarchiveClassPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class UnarchiveClassSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UnarchiveClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnarchiveClassPathParams;

  @SpeakeasyMetadata()
  security: UnarchiveClassSecurity;
}


export class UnarchiveClassResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classDetails?: shared.ClassDetails;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
