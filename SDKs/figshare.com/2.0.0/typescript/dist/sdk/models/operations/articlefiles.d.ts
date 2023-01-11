import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleFilesPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class ArticleFilesRequest extends SpeakeasyBase {
    pathParams: ArticleFilesPathParams;
}
export declare class ArticleFilesResponse extends SpeakeasyBase {
    contentType: string;
    publicFiles?: shared.PublicFile[];
    statusCode: number;
}
