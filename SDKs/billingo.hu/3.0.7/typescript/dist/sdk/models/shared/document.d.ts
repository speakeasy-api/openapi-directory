import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { DocumentItem } from "./documentitem";
import { DocumentLanguageEnum } from "./documentlanguageenum";
import { DocumentNotificationStatusEnum } from "./documentnotificationstatusenum";
import { DocumentOrganization } from "./documentorganization";
import { DocumentSettings } from "./documentsettings";
import { DocumentSummary } from "./documentsummary";
import { DocumentTypeEnum } from "./documenttypeenum";
import { Partner } from "./partner";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { PaymentStatusEnum } from "./paymentstatusenum";
/**
 * Document object representing your invoice.
 */
export declare class Document extends SpeakeasyBase {
    /**
     * DocumentBlock's identifier.
     */
    blockId?: number;
    cancelled?: boolean;
    comment?: string;
    conversionRate?: number;
    currency?: CurrencyEnum;
    dueDate?: Date;
    electronic?: boolean;
    fulfillmentDate?: Date;
    /**
     * The document's gross total price.
     */
    grossTotal?: number;
    /**
     * The document's unique identifier.
     */
    id?: number;
    invoiceDate?: Date;
    /**
     * The document's invoice number.
     */
    invoiceNumber?: string;
    items?: DocumentItem[];
    language?: DocumentLanguageEnum;
    notificationStatus?: DocumentNotificationStatusEnum;
    organization?: DocumentOrganization;
    paidDate?: Date;
    partner?: Partner;
    paymentMethod?: PaymentMethodEnum;
    paymentStatus?: PaymentStatusEnum;
    settings?: DocumentSettings;
    summary?: DocumentSummary;
    tags?: string[];
    type?: DocumentTypeEnum;
}
