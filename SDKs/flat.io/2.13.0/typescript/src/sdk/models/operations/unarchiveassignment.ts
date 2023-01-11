import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnarchiveAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class UnarchiveAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UnarchiveAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnarchiveAssignmentPathParams;

  @SpeakeasyMetadata()
  security: UnarchiveAssignmentSecurity;
}


export class UnarchiveAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignment?: shared.Assignment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
