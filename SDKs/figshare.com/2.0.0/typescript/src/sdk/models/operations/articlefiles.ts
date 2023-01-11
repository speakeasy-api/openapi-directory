import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class ArticleFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleFilesPathParams;
}


export class ArticleFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PublicFile })
  publicFiles?: shared.PublicFile[];

  @SpeakeasyMetadata()
  statusCode: number;
}
