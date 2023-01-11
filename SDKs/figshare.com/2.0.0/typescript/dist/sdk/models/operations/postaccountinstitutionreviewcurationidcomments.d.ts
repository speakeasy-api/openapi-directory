import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountInstitutionReviewCurationIdCommentsPathParams extends SpeakeasyBase {
    curationId: number;
}
export declare class PostAccountInstitutionReviewCurationIdCommentsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PostAccountInstitutionReviewCurationIdCommentsRequest extends SpeakeasyBase {
    pathParams: PostAccountInstitutionReviewCurationIdCommentsPathParams;
    request: shared.CurationCommentCreate;
    security: PostAccountInstitutionReviewCurationIdCommentsSecurity;
}
export declare class PostAccountInstitutionReviewCurationIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
