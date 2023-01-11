import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleReserveHandlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleReserveHandleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleReserveHandleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleReserveHandlePathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleReserveHandleSecurity;
}


export class PrivateArticleReserveHandleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleHandle?: shared.ArticleHandle;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
