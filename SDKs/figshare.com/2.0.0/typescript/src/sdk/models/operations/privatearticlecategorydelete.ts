import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleCategoryDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: number;
}


export class PrivateArticleCategoryDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleCategoryDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleCategoryDeletePathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleCategoryDeleteSecurity;
}


export class PrivateArticleCategoryDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
