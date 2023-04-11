import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountInstitutionCurationCommentsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class AccountInstitutionCurationCommentsRequest extends SpeakeasyBase {
    /**
     * ID of the curation
     */
    curationId: number;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
}
export declare class AccountInstitutionCurationCommentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. A curation review's comments.
     */
    curationComment?: shared.CurationComment;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
