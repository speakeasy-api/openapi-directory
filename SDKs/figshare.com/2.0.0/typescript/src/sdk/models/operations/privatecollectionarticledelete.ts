import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateCollectionArticleDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: number;
}


export class PrivateCollectionArticleDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateCollectionArticleDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateCollectionArticleDeletePathParams;

  @SpeakeasyMetadata()
  security: PrivateCollectionArticleDeleteSecurity;
}


export class PrivateCollectionArticleDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
