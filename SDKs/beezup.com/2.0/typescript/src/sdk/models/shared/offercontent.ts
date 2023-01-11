import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContractBillingPeriodInfo } from "./contractbillingperiodinfo";
import { ContractBonusInfo } from "./contractbonusinfo";
import { ContractClickInfo } from "./contractclickinfo";
import { ContractCommitmentInfo } from "./contractcommitmentinfo";
import { ContractDiscountInfo } from "./contractdiscountinfo";
import { ContractMoneyInfo } from "./contractmoneyinfo";
import { ContractStoreInfo } from "./contractstoreinfo";
import { PreviousFixPeriodInvoiceProrataInfo } from "./previousfixperiodinvoiceproratainfo";



export class OfferContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractBillingPeriodInfo" })
  contractBillingPeriodInfo: ContractBillingPeriodInfo;

  @SpeakeasyMetadata({ data: "json, name=contractBonusInfo" })
  contractBonusInfo: ContractBonusInfo;

  @SpeakeasyMetadata({ data: "json, name=contractClickInfo" })
  contractClickInfo: ContractClickInfo;

  @SpeakeasyMetadata({ data: "json, name=contractCommitmentInfo" })
  contractCommitmentInfo: ContractCommitmentInfo;

  @SpeakeasyMetadata({ data: "json, name=contractDiscountInfo" })
  contractDiscountInfo: ContractDiscountInfo;

  @SpeakeasyMetadata({ data: "json, name=contractMoneyInfo" })
  contractMoneyInfo: ContractMoneyInfo;

  @SpeakeasyMetadata({ data: "json, name=contractStoreInfo" })
  contractStoreInfo: ContractStoreInfo;

  @SpeakeasyMetadata({ data: "json, name=contractTerminationReason" })
  contractTerminationReason?: string;

  @SpeakeasyMetadata({ data: "json, name=contractTerminationReasonType" })
  contractTerminationReasonType?: number;

  @SpeakeasyMetadata({ data: "json, name=notifyVatExemption" })
  notifyVatExemption: boolean;

  @SpeakeasyMetadata({ data: "json, name=previousFixPeriodInvoiceProrataInfo" })
  previousFixPeriodInvoiceProrataInfo: PreviousFixPeriodInvoiceProrataInfo;
}
