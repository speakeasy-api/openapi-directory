import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateCollectionCategoriesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;
}


export class PrivateCollectionCategoriesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateCollectionCategoriesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateCollectionCategoriesListPathParams;

  @SpeakeasyMetadata()
  security: PrivateCollectionCategoriesListSecurity;
}


export class PrivateCollectionCategoriesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
