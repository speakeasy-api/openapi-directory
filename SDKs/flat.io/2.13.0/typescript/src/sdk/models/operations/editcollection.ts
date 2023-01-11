import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: string;
}


export class EditCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class EditCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditCollectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CollectionModification;

  @SpeakeasyMetadata()
  security: EditCollectionSecurity;
}


export class EditCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collection?: shared.Collection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
