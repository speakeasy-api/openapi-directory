import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class RequestActivationResponse extends SpeakeasyBase {
    /**
     * The unique identifier of the company account.
     */
    companyId?: string;
    /**
     * The unique identifier of the merchant account you requested to activate.
     */
    merchantId?: string;
}
