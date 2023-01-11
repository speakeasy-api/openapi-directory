import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleFilesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleFilesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleFilesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleFilesListPathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleFilesListSecurity;
}


export class PrivateArticleFilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.PrivateFile })
  privateFiles?: shared.PrivateFile[];

  @SpeakeasyMetadata()
  statusCode: number;
}
