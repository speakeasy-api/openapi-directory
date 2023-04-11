import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAuditCategoryRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     *
     * @remarks
     * Audit category ID (table PK)
     *
     */
    primaryCategoryId?: string[];
    /**
     * Primary Audit Category
     *
     * @remarks
     *     - No Findings or Issues/Not a Committee
     *     - Net Outstanding Campaign/Convention Expenditures/Obligations
     *     - Payments/Disgorgements
     *     - Allocation Issues
     *     - Prohibited Contributions
     *     - Disclosure
     *     - Recordkeeping
     *     - Repayment to US Treasury
     *     - Other
     *     - Misstatement of Financial Activity
     *     - Excessive Contributions
     *     - Failure to File Reports/Schedules/Notices
     *     - Loans
     *     - Referred Findings Not Listed
     *
     */
    primaryCategoryName?: string[];
    /**
     * Provide a field to sort by. Use `-` for descending order.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * Hide null values on sorted column(s).
     */
    sortHideNull?: boolean;
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    sortNullOnly?: boolean;
    /**
     * Toggle that sorts null values last
     */
    sortNullsLast?: boolean;
}
export declare class GetAuditCategoryResponse extends SpeakeasyBase {
    auditCategoryPage?: shared.AuditCategoryPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
