import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleFilePathParams extends SpeakeasyBase {
    articleId: number;
    fileId: number;
}
export declare class PrivateArticleFileSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleFileRequest extends SpeakeasyBase {
    pathParams: PrivateArticleFilePathParams;
    security: PrivateArticleFileSecurity;
}
export declare class PrivateArticleFileResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    privateFile?: shared.PrivateFile;
    statusCode: number;
}
