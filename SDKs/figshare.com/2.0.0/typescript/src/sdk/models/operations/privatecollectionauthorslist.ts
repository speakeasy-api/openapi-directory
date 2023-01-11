import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateCollectionAuthorsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;
}


export class PrivateCollectionAuthorsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateCollectionAuthorsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateCollectionAuthorsListPathParams;

  @SpeakeasyMetadata()
  security: PrivateCollectionAuthorsListSecurity;
}


export class PrivateCollectionAuthorsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Author })
  authors?: shared.Author[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
