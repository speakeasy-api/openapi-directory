import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { FixedAndVariableClickModelInfo } from "./fixedandvariableclickmodelinfo";
import { VariableModelInfo } from "./variablemodelinfo";



// ContractCommitmentInfo
/** 
 * Describe the commitment information related to the offer.
**/
export class ContractCommitmentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commercialCreatorUserId" })
  commercialCreatorUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=commercialUserId" })
  commercialUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=commitmentCalculatedFinishDate" })
  commitmentCalculatedFinishDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commitmentPeriodInMonth" })
  commitmentPeriodInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=contractType" })
  contractType?: number;

  @SpeakeasyMetadata({ data: "json, name=couponOfferCode" })
  couponOfferCode?: string;

  @SpeakeasyMetadata({ data: "json, name=currentContractId" })
  currentContractId?: string;

  @SpeakeasyMetadata({ data: "json, name=currentContractTerminationDate" })
  currentContractTerminationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currentCustomerPaymentMethod" })
  currentCustomerPaymentMethod?: PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=fixedAndVariableClickInfo" })
  fixedAndVariableClickInfo?: FixedAndVariableClickModelInfo;

  @SpeakeasyMetadata({ data: "json, name=isCustomerWantsToTerminateHisContract" })
  isCustomerWantsToTerminateHisContract?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isModelMustBeTransmittedInNewContract" })
  isModelMustBeTransmittedInNewContract?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minBillingPeriodInMonths" })
  minBillingPeriodInMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=newContractStartDate" })
  newContractStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: number;

  @SpeakeasyMetadata({ data: "json, name=offerName" })
  offerName?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDelayInDays" })
  paymentDelayInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodAuthorized" })
  paymentMethodAuthorized?: PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=requestedPaymentMethod" })
  requestedPaymentMethod?: PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodFinishDate" })
  trialPeriodFinishDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=trialPeriodInMonth" })
  trialPeriodInMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=variableModelInfo" })
  variableModelInfo?: VariableModelInfo;
}
