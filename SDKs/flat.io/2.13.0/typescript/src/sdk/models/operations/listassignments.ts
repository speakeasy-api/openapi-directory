import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAssignmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class ListAssignmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListAssignmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListAssignmentsPathParams;

  @SpeakeasyMetadata()
  security: ListAssignmentsSecurity;
}


export class ListAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Assignment })
  assignments?: shared.Assignment[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
