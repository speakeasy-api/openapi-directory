import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleFilesListPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleFilesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleFilesListRequest extends SpeakeasyBase {
    pathParams: PrivateArticleFilesListPathParams;
    security: PrivateArticleFilesListSecurity;
}
export declare class PrivateArticleFilesListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    privateFiles?: shared.PrivateFile[];
    statusCode: number;
}
