import { SpeakeasyBase } from "../../../internal/utils";
import { FixedAndVariableClickModelInfo } from "./fixedandvariableclickmodelinfo";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { VariableModelInfo } from "./variablemodelinfo";
/**
 * Describe the commitment information related to the offer.
 */
export declare class ContractCommitmentInfo extends SpeakeasyBase {
    /**
     * The commercial that is responsible of the creation of your account
     */
    commercialCreatorUserId?: string;
    /**
     * Your current commercial user id
     */
    commercialUserId?: string;
    /**
     * The commitment end date related to the offer
     */
    commitmentCalculatedFinishDate?: Date;
    /**
     * The commitment period in month related to the offer
     */
    commitmentPeriodInMonth?: number;
    /**
     * Internal usage: Old offer type. Your contract type
     */
    contractType?: number;
    /**
     * Your special coupon offer identifier
     */
    couponOfferCode?: string;
    /**
     * Your current contract id
     */
    currentContractId?: string;
    /**
     * The current contract termination date
     */
    currentContractTerminationDate?: Date;
    /**
     * Payment method
     */
    currentCustomerPaymentMethod?: PaymentMethodEnum;
    /**
     * Internal usage: Old offer type. Describe the fix and variable model information
     */
    fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo;
    /**
     * If true, this means you want to leave us and that's sad... :'-(
     */
    isCustomerWantsToTerminateHisContract?: boolean;
    /**
     * Internal usage: Old offer type. Is the current contract model needs to be converted into a new contract type
     */
    isModelMustBeTransmittedInNewContract?: boolean;
    /**
     * The minimum billing period in month authorized for this offer.
     */
    minBillingPeriodInMonths?: number;
    /**
     * Interal usage: Old offer type. The model description
     */
    model?: string;
    /**
     * The start date related to the offer
     */
    newContractStartDate?: Date;
    /**
     * The offer id based on /offers. Not a free offer of course.
     */
    offerId?: number;
    /**
     * The offer Name
     */
    offerName?: string;
    /**
     * The payment delay in days related to the offer
     */
    paymentDelayInDays?: number;
    /**
     * Payment method
     */
    paymentMethodAuthorized?: PaymentMethodEnum;
    /**
     * Payment method
     */
    requestedPaymentMethod?: PaymentMethodEnum;
    /**
     * The trial period end date related to the offer
     */
    trialPeriodFinishDate?: Date;
    /**
     * The trial period in month related to the offer
     */
    trialPeriodInMonth?: number;
    /**
     * Internal usage: Old offer type. Describe the fix and variable model information
     */
    variableModelInfo?: VariableModelInfo;
}
