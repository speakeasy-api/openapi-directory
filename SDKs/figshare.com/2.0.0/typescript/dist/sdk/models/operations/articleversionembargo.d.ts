import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleVersionEmbargoPathParams extends SpeakeasyBase {
    articleId: number;
    vNumber: number;
}
export declare class ArticleVersionEmbargoRequest extends SpeakeasyBase {
    pathParams: ArticleVersionEmbargoPathParams;
}
export declare class ArticleVersionEmbargoResponse extends SpeakeasyBase {
    articleEmbargo?: shared.ArticleEmbargo;
    contentType: string;
    statusCode: number;
}
