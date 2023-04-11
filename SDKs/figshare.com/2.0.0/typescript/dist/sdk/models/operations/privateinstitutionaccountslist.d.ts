import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateInstitutionAccountsListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateInstitutionAccountsListRequest extends SpeakeasyBase {
    /**
     * Filter by email
     */
    email?: string;
    /**
     * Retrieve accounts with an ID greater or equal to the specified value
     */
    idGte?: number;
    /**
     * Retrieve accounts with an ID lower or equal to the specified value
     */
    idLte?: number;
    /**
     * Filter by institution_user_id
     */
    institutionUserId?: string;
    /**
     * Filter by active status
     */
    isActive?: number;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
}
export declare class PrivateInstitutionAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. An array of Accounts
     */
    shortAccounts?: shared.ShortAccount[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
