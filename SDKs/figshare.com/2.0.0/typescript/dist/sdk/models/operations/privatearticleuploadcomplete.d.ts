import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleUploadCompletePathParams extends SpeakeasyBase {
    articleId: number;
    fileId: number;
}
export declare class PrivateArticleUploadCompleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleUploadCompleteRequest extends SpeakeasyBase {
    pathParams: PrivateArticleUploadCompletePathParams;
    security: PrivateArticleUploadCompleteSecurity;
}
export declare class PrivateArticleUploadCompleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
