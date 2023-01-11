import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentVatRateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vat_name" })
  vatName?: string;

  @SpeakeasyMetadata({ data: "json, name=vat_percentage" })
  vatPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=vat_rate_gross_amount" })
  vatRateGrossAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=vat_rate_net_amount" })
  vatRateNetAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=vat_rate_vat_amount" })
  vatRateVatAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=vat_rate_vat_amount_local" })
  vatRateVatAmountLocal?: number;
}
