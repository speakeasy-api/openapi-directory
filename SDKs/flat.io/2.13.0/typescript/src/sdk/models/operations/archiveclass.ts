import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArchiveClassPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class ArchiveClassSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ArchiveClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArchiveClassPathParams;

  @SpeakeasyMetadata()
  security: ArchiveClassSecurity;
}


export class ArchiveClassResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classDetails?: shared.ClassDetails;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
