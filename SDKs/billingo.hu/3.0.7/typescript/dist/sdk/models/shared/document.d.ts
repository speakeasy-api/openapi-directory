import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Document object representing your invoice.
**/
export declare class Document extends SpeakeasyBase {
    blockId?: number;
    cancelled?: boolean;
    comment?: string;
    conversionRate?: number;
    currency?: CurrencyEnum;
    dueDate?: Date;
    electronic?: boolean;
    fulfillmentDate?: Date;
    grossTotal?: number;
    id?: number;
    invoiceDate?: Date;
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
