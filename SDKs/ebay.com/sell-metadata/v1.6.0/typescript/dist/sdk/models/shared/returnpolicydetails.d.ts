import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDuration } from "./timeduration";
/**
 * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
 */
export declare class ReturnPolicyDetails extends SpeakeasyBase {
    /**
     * If set to <code>true</code>, this flag indicates you can supply a detailed return policy description within your return policy (for example, by populating the <b>returnInstructions</b> field in the Account API's <b>createReturnPolicy</b>). User-supplied return policy details are allowed only in the DE, ES, FR, and IT marketplaces.
     */
    policyDescriptionEnabled?: boolean;
    /**
     * A list of refund methods allowed for the associated category.
     */
    refundMethods?: string[];
    /**
     * A list of return methods allowed for the associated category.
     */
    returnMethods?: string[];
    /**
     * A list of return periods allowed for the associated category.  <br><br>Note that different APIs require you to enter the return period in different ways. For example, the Account API uses the complex <b>TimeDuration</b> type, which takes two values (a <b>unit</b> and a <b>value</b>), whereas the Trading API takes a single value (such as <code>Days_30</code>).
     */
    returnPeriods?: TimeDuration[];
    /**
     * A list of allowed values for who pays for the return shipping cost.  <br><br>Note that for SNAD returns, the seller is always responsible for the return shipping cost.
     */
    returnShippingCostPayers?: string[];
    /**
     * If set to <code>true</code>, this flag indicates the seller can configure how they handle domestic returns.
     */
    returnsAcceptanceEnabled?: boolean;
}
