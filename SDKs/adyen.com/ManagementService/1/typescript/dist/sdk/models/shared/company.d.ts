import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyLinks } from "./companylinks";
import { DataCenter } from "./datacenter";
/**
 * OK - the request has succeeded.
 */
export declare class Company extends SpeakeasyBase {
    links?: CompanyLinks;
    /**
     * List of available data centers.
     *
     * @remarks
     *
     * Adyen has several data centers around the world.In the URL that you use for making API requests, we recommend you use the live URL prefix from the data center closest to your shoppers.
     */
    dataCenters?: DataCenter[];
    /**
     * Your description for the company account, maximum 300 characters
     */
    description?: string;
    /**
     * The unique identifier of the company account.
     */
    id?: string;
    /**
     * The legal or trading name of the company.
     */
    name?: string;
    /**
     * Your reference to the account
     */
    reference?: string;
    /**
     * The status of the company account.
     *
     * @remarks
     *
     * Possible values:
     *
     * * **Active**: Users can log in. Processing and payout capabilities depend on the status of the merchant account.
     * * **Inactive**: Users can log in. Payment processing and payouts are disabled.
     * * **Closed**: The company account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.
     */
    status?: string;
}
