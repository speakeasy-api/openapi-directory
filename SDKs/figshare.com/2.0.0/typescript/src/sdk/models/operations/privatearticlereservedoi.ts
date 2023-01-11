import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleReserveDoiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleReserveDoiSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleReserveDoiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleReserveDoiPathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleReserveDoiSecurity;
}


export class PrivateArticleReserveDoiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleDOI?: shared.ArticleDoi;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
