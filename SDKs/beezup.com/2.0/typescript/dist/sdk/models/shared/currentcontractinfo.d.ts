import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentContractInfoLinks } from "./currentcontractinfolinks";
import { FixedAndVariableClickModelInfo } from "./fixedandvariableclickmodelinfo";
import { VariableModelInfo } from "./variablemodelinfo";
/**
 * Get the conditions of your current contract
 */
export declare class CurrentContractInfo extends SpeakeasyBase {
    /**
     * Additional click price
     */
    additionalClickPrice?: number;
    /**
     * The billing period in month
     */
    billingPeriodInMonth?: number;
    /**
     * The percent discount related to the billing period
     */
    billingPeriodPercentDiscount?: number;
    /**
     * The click included
     */
    clickIncluded?: number;
    /**
     * The calculated end date of commitment
     */
    commitmentCalculatedFinishUtcDate?: Date;
    /**
     * The commitment period in month
     */
    commitmentPeriodInMonth?: number;
    /**
     * Your contract identifier
     */
    contractId?: string;
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode?: string;
    /**
     * The discount duration in month
     */
    discountDurationInMonth?: number;
    /**
     * The end of your discount
     */
    discountEndUtcDate?: Date;
    /**
     * Internal usage: Old offer type. Describe the fix and variable model information
     */
    fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo;
    /**
     * The fixed price of your contract
     */
    fixedPrice?: number;
    /**
     * The IP of the user who creates the contract
     */
    ipUserCreation?: string;
    /**
     * The IP of the user who modified the contract
     */
    ipUserModification?: string;
    /**
     * Is commitment is automatically renewed
     */
    isCommitmentRenewalAutomatically?: boolean;
    /**
     * Is the contract is modifiable ?
     */
    isModifiableContract?: boolean;
    links: CurrentContractInfoLinks;
    /**
     * The offer id based on /offers. Not a free offer of course.
     */
    offerId?: number;
    /**
     * The offer name based on /offers
     */
    offerName?: string;
    /**
     * The percent of the discount
     */
    percentDiscount?: number;
    /**
     * The start date of your contract
     */
    startUtcDate?: Date;
    /**
     * The store count you want to have in your contract.
     */
    storeCount?: number;
    /**
     * The trial period in month
     */
    trialPeriodInMonth?: number;
    /**
     * Internal usage: Old offer type. Describe the fix and variable model information
     */
    variableModelInfo?: VariableModelInfo;
}
