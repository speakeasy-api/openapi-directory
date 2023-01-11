import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { DocumentItem } from "./documentitem";
import { DocumentLanguageEnum } from "./documentlanguageenum";
import { DocumentNotificationStatusEnum } from "./documentnotificationstatusenum";
import { DocumentOrganization } from "./documentorganization";
import { Partner } from "./partner";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { PaymentStatusEnum } from "./paymentstatusenum";
import { DocumentSettings } from "./documentsettings";
import { DocumentSummary } from "./documentsummary";
import { DocumentTypeEnum } from "./documenttypeenum";



// Document
/** 
 * Document object representing your invoice.
**/
export class Document extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=block_id" })
  blockId?: number;

  @SpeakeasyMetadata({ data: "json, name=cancelled" })
  cancelled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=conversion_rate" })
  conversionRate?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=electronic" })
  electronic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fulfillment_date" })
  fulfillmentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=gross_total" })
  grossTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=invoice_date" })
  invoiceDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoice_number" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: DocumentItem })
  items?: DocumentItem[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: DocumentLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=notification_status" })
  notificationStatus?: DocumentNotificationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: DocumentOrganization;

  @SpeakeasyMetadata({ data: "json, name=paid_date" })
  paidDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: Partner;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod?: PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=payment_status" })
  paymentStatus?: PaymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: DocumentSettings;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: DocumentSummary;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DocumentTypeEnum;
}
