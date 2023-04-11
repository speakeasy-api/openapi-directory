import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAccountInstitutionReviewCurationIdCommentsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PostAccountInstitutionReviewCurationIdCommentsRequest extends SpeakeasyBase {
    /**
     * The content/value of the comment.
     */
    curationCommentCreate: shared.CurationCommentCreate;
    /**
     * ID of the curation
     */
    curationId: number;
}
export declare class PostAccountInstitutionReviewCurationIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
