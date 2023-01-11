import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreviousFixPeriodInvoiceProrataInfo
/** 
 * Describe the prorata info based on your previous invoice
**/
export class PreviousFixPeriodInvoiceProrataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountAfterTax" })
  amountAfterTax?: number;

  @SpeakeasyMetadata({ data: "json, name=amountToBePaid" })
  amountToBePaid?: number;

  @SpeakeasyMetadata({ data: "json, name=computedProrataToBeDeducted" })
  computedProrataToBeDeducted?: number;

  @SpeakeasyMetadata({ data: "json, name=contractId" })
  contractId?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedPeriodEndDate" })
  fixedPeriodEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=fixedPeriodStartDate" })
  fixedPeriodStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumber" })
  invoiceNumber?: string;
}
