import { SpeakeasyBase } from "../../../internal/utils";
import { FixedAndVariableClickModelInfo } from "./fixedandvariableclickmodelinfo";
import { CurrentContractInfoLinks } from "./currentcontractinfolinks";
import { VariableModelInfo } from "./variablemodelinfo";
/**
 * Get the conditions of your current contract
**/
export declare class CurrentContractInfo extends SpeakeasyBase {
    additionalClickPrice?: number;
    billingPeriodInMonth?: number;
    billingPeriodPercentDiscount?: number;
    clickIncluded?: number;
    commitmentCalculatedFinishUtcDate?: Date;
    commitmentPeriodInMonth?: number;
    contractId?: string;
    currencyCode?: string;
    discountDurationInMonth?: number;
    discountEndUtcDate?: Date;
    fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo;
    fixedPrice?: number;
    ipUserCreation?: string;
    ipUserModification?: string;
    isCommitmentRenewalAutomatically?: boolean;
    isModifiableContract?: boolean;
    links: CurrentContractInfoLinks;
    offerId?: number;
    offerName?: string;
    percentDiscount?: number;
    startUtcDate?: Date;
    storeCount?: number;
    trialPeriodInMonth?: number;
    variableModelInfo?: VariableModelInfo;
}
