import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateCollectionReserveHandlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;
}


export class PrivateCollectionReserveHandleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateCollectionReserveHandleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateCollectionReserveHandlePathParams;

  @SpeakeasyMetadata()
  security: PrivateCollectionReserveHandleSecurity;
}


export class PrivateCollectionReserveHandleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionHandle?: shared.CollectionHandle;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
