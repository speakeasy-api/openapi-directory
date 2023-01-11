import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateAuthorDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=author_id" })
  authorId: number;
}


export class PrivateAuthorDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateAuthorDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateAuthorDetailsPathParams;

  @SpeakeasyMetadata()
  security: PrivateAuthorDetailsSecurity;
}


export class PrivateAuthorDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorComplete?: shared.AuthorComplete;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
