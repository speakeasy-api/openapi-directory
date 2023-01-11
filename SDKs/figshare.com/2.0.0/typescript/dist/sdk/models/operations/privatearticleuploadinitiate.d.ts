import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateArticleUploadInitiatePathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class PrivateArticleUploadInitiateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateArticleUploadInitiateRequest extends SpeakeasyBase {
    pathParams: PrivateArticleUploadInitiatePathParams;
    request: shared.FileCreator;
    security: PrivateArticleUploadInitiateSecurity;
}
export declare class PrivateArticleUploadInitiateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
