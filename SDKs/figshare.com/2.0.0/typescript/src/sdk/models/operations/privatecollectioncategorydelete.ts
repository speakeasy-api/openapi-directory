import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateCollectionCategoryDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;
}


export class PrivateCollectionCategoryDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateCollectionCategoryDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateCollectionCategoryDeletePathParams;

  @SpeakeasyMetadata()
  security: PrivateCollectionCategoryDeleteSecurity;
}


export class PrivateCollectionCategoryDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
