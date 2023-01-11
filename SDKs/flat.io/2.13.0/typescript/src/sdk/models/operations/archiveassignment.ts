import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArchiveAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class ArchiveAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ArchiveAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArchiveAssignmentPathParams;

  @SpeakeasyMetadata()
  security: ArchiveAssignmentSecurity;
}


export class ArchiveAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignment?: shared.Assignment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
