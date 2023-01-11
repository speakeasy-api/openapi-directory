import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleAuthorsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleAuthorsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleAuthorsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleAuthorsListPathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleAuthorsListSecurity;
}


export class PrivateArticleAuthorsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Author })
  authors?: shared.Author[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
