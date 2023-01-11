import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FixedAndVariableClickModelInfo } from "./fixedandvariableclickmodelinfo";
import { NextContractInfoLinks } from "./nextcontractinfolinks";
import { VariableModelInfo } from "./variablemodelinfo";



// NextContractInfo
/** 
 * Get the conditions of your next contract
**/
export class NextContractInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalClickPrice" })
  additionalClickPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodInMonth" })
  billingPeriodInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=billingPeriodPercentDiscount" })
  billingPeriodPercentDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=clickIncluded" })
  clickIncluded?: number;

  @SpeakeasyMetadata({ data: "json, name=commitmentCalculatedFinishUtcDate" })
  commitmentCalculatedFinishUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commitmentPeriodInMonth" })
  commitmentPeriodInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=contractId" })
  contractId?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=discountDurationInMonth" })
  discountDurationInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=discountEndUtcDate" })
  discountEndUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=fixedAndVariableClickInfo" })
  fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo;

  @SpeakeasyMetadata({ data: "json, name=fixedPrice" })
  fixedPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=ipUserCreation" })
  ipUserCreation?: string;

  @SpeakeasyMetadata({ data: "json, name=ipUserModification" })
  ipUserModification?: string;

  @SpeakeasyMetadata({ data: "json, name=isCommitmentRenewalAutomatically" })
  isCommitmentRenewalAutomatically?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isModifiableContract" })
  isModifiableContract?: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: NextContractInfoLinks;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: number;

  @SpeakeasyMetadata({ data: "json, name=offerName" })
  offerName?: string;

  @SpeakeasyMetadata({ data: "json, name=percentDiscount" })
  percentDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=startUtcDate" })
  startUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=storeCount" })
  storeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodInMonth" })
  trialPeriodInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=variableModelInfo" })
  variableModelInfo?: VariableModelInfo;
}
