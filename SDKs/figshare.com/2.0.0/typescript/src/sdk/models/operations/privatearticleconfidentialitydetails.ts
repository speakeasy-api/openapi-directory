import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleConfidentialityDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleConfidentialityDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleConfidentialityDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleConfidentialityDetailsPathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleConfidentialityDetailsSecurity;
}


export class PrivateArticleConfidentialityDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleConfidentiality?: shared.ArticleConfidentiality;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
