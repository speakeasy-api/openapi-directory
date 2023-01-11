import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateAuthorDetailsPathParams extends SpeakeasyBase {
    authorId: number;
}
export declare class PrivateAuthorDetailsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateAuthorDetailsRequest extends SpeakeasyBase {
    pathParams: PrivateAuthorDetailsPathParams;
    security: PrivateAuthorDetailsSecurity;
}
export declare class PrivateAuthorDetailsResponse extends SpeakeasyBase {
    authorComplete?: shared.AuthorComplete;
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
