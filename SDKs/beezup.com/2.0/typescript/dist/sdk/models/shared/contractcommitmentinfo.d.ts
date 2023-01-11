import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { FixedAndVariableClickModelInfo } from "./fixedandvariableclickmodelinfo";
import { VariableModelInfo } from "./variablemodelinfo";
/**
 * Describe the commitment information related to the offer.
**/
export declare class ContractCommitmentInfo extends SpeakeasyBase {
    commercialCreatorUserId?: string;
    commercialUserId?: string;
    commitmentCalculatedFinishDate?: Date;
    commitmentPeriodInMonth?: number;
    contractType?: number;
    couponOfferCode?: string;
    currentContractId?: string;
    currentContractTerminationDate?: Date;
    currentCustomerPaymentMethod?: PaymentMethodEnum;
    fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo;
    isCustomerWantsToTerminateHisContract?: boolean;
    isModelMustBeTransmittedInNewContract?: boolean;
    minBillingPeriodInMonths?: number;
    model?: string;
    newContractStartDate?: Date;
    offerId?: number;
    offerName?: string;
    paymentDelayInDays?: number;
    paymentMethodAuthorized?: PaymentMethodEnum;
    requestedPaymentMethod?: PaymentMethodEnum;
    trialPeriodFinishDate?: Date;
    trialPeriodInMonth?: number;
    variableModelInfo?: VariableModelInfo;
}
