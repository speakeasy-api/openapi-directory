import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountInstitutionCurationsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Filter by the status of the review
 */
export declare enum AccountInstitutionCurationsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}
export declare class AccountInstitutionCurationsRequest extends SpeakeasyBase {
    /**
     * Retrieve the reviews for this article
     */
    articleId?: number;
    /**
     * Filter by the group ID
     */
    groupId?: number;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * Filter by the status of the review
     */
    status?: AccountInstitutionCurationsStatusEnum;
}
export declare class AccountInstitutionCurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. A list of curation reviews.
     */
    curation?: shared.Curation;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
