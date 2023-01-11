import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentVatRateSummary } from "./documentvatratesummary";



export class DocumentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross_amount_local" })
  grossAmountLocal?: number;

  @SpeakeasyMetadata({ data: "json, name=net_amount" })
  netAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=net_amount_local" })
  netAmountLocal?: number;

  @SpeakeasyMetadata({ data: "json, name=vat_amount" })
  vatAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=vat_amount_local" })
  vatAmountLocal?: number;

  @SpeakeasyMetadata({ data: "json, name=vat_rate_summary", elemType: DocumentVatRateSummary })
  vatRateSummary?: DocumentVatRateSummary[];
}
