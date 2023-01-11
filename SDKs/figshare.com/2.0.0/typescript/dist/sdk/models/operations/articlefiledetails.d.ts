import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleFileDetailsPathParams extends SpeakeasyBase {
    articleId: number;
    fileId: number;
}
export declare class ArticleFileDetailsRequest extends SpeakeasyBase {
    pathParams: ArticleFileDetailsPathParams;
}
export declare class ArticleFileDetailsResponse extends SpeakeasyBase {
    contentType: string;
    publicFile?: shared.PublicFile;
    statusCode: number;
}
