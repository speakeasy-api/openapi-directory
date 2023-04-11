import { SpeakeasyBase } from "../../../internal/utils";
import { ContractBillingPeriodInfo } from "./contractbillingperiodinfo";
import { ContractBonusInfo } from "./contractbonusinfo";
import { ContractClickInfo } from "./contractclickinfo";
import { ContractCommitmentInfo } from "./contractcommitmentinfo";
import { ContractDiscountInfo } from "./contractdiscountinfo";
import { ContractMoneyInfo } from "./contractmoneyinfo";
import { ContractStoreInfo } from "./contractstoreinfo";
import { PreviousFixPeriodInvoiceProrataInfo } from "./previousfixperiodinvoiceproratainfo";
export declare class OfferContent extends SpeakeasyBase {
    /**
     * Describe the billing period information related to the offer.
     */
    contractBillingPeriodInfo: ContractBillingPeriodInfo;
    /**
     * Describe the bonus information related to your current contract.
     */
    contractBonusInfo: ContractBonusInfo;
    /**
     * Describe the click information related to the offer.
     */
    contractClickInfo: ContractClickInfo;
    /**
     * Describe the commitment information related to the offer.
     */
    contractCommitmentInfo: ContractCommitmentInfo;
    /**
     * Describe the discount information related to the offer.
     */
    contractDiscountInfo: ContractDiscountInfo;
    /**
     * Describe the pricing information related to the offer.
     */
    contractMoneyInfo: ContractMoneyInfo;
    /**
     * Describe the store information related to the offer.
     */
    contractStoreInfo: ContractStoreInfo;
    /**
     * The termination reason, if your current contract is scheduled to be terminated.
     */
    contractTerminationReason?: string;
    /**
     * The contract termination reason type identifier, if your current contract is scheduled to be terminated. The value is based on the list of values /user/lov/ContractTerminationReason
     */
    contractTerminationReasonType?: number;
    /**
     * Internal usage: Indicates if we have to notify you about VAT exemption.
     */
    notifyVatExemption: boolean;
    /**
     * Describe the prorata info based on your previous invoice
     */
    previousFixPeriodInvoiceProrataInfo: PreviousFixPeriodInvoiceProrataInfo;
}
