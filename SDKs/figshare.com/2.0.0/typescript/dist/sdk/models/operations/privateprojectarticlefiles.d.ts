import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectArticleFilesPathParams extends SpeakeasyBase {
    articleId: number;
    projectId: number;
}
export declare class PrivateProjectArticleFilesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectArticleFilesRequest extends SpeakeasyBase {
    pathParams: PrivateProjectArticleFilesPathParams;
    security: PrivateProjectArticleFilesSecurity;
}
export declare class PrivateProjectArticleFilesResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    privateFiles?: shared.PrivateFile[];
    statusCode: number;
}
