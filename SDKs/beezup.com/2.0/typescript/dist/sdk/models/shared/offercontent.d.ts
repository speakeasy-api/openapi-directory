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
    contractBillingPeriodInfo: ContractBillingPeriodInfo;
    contractBonusInfo: ContractBonusInfo;
    contractClickInfo: ContractClickInfo;
    contractCommitmentInfo: ContractCommitmentInfo;
    contractDiscountInfo: ContractDiscountInfo;
    contractMoneyInfo: ContractMoneyInfo;
    contractStoreInfo: ContractStoreInfo;
    contractTerminationReason?: string;
    contractTerminationReasonType?: number;
    notifyVatExemption: boolean;
    previousFixPeriodInvoiceProrataInfo: PreviousFixPeriodInvoiceProrataInfo;
}
