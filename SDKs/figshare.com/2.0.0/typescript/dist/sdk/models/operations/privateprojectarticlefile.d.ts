import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectArticleFilePathParams extends SpeakeasyBase {
    articleId: number;
    fileId: number;
    projectId: number;
}
export declare class PrivateProjectArticleFileSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectArticleFileRequest extends SpeakeasyBase {
    pathParams: PrivateProjectArticleFilePathParams;
    security: PrivateProjectArticleFileSecurity;
}
export declare class PrivateProjectArticleFileResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    privateFile?: shared.PrivateFile;
    statusCode: number;
}
