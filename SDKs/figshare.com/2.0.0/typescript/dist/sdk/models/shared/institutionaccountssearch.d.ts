import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Search Parameters
 */
export declare class InstitutionAccountsSearch extends SpeakeasyBase {
    /**
     * filter by email
     */
    email?: string;
    /**
     * filter by institution_user_id
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
    /**
     * Search term
     */
    searchFor?: string;
}
