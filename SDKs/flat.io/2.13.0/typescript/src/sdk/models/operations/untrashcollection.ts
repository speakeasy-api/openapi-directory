import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UntrashCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: string;
}


export class UntrashCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UntrashCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UntrashCollectionPathParams;

  @SpeakeasyMetadata()
  security: UntrashCollectionSecurity;
}


export class UntrashCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
