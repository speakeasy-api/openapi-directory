import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleCategoriesAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleCategoriesAddSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleCategoriesAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleCategoriesAddPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CategoriesCreator;

  @SpeakeasyMetadata()
  security: PrivateArticleCategoriesAddSecurity;
}


export class PrivateArticleCategoriesAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
