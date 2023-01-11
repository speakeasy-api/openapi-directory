import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { DocumentItemData } from "./documentitemdata";
import { DocumentProductData } from "./documentproductdata";
import { DocumentLanguageEnum } from "./documentlanguageenum";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { DocumentSettings } from "./documentsettings";
import { DocumentInsertTypeEnum } from "./documentinserttypeenum";



export class DocumentInsert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bank_account_id" })
  bankAccountId?: number;

  @SpeakeasyMetadata({ data: "json, name=block_id" })
  blockId: number;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=conversion_rate" })
  conversionRate?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=electronic" })
  electronic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fulfillment_date" })
  fulfillmentDate: Date;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: any[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language: DocumentLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=paid" })
  paid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=partner_id" })
  partnerId: number;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod: PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: DocumentSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: DocumentInsertTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
