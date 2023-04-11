import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { DocumentInsertTypeEnum } from "./documentinserttypeenum";
import { DocumentLanguageEnum } from "./documentlanguageenum";
import { DocumentSettings } from "./documentsettings";
import { PaymentMethodEnum } from "./paymentmethodenum";
/**
 * DocumentInsert object that you would like to store.
 */
export declare class DocumentInsert extends SpeakeasyBase {
    bankAccountId?: number;
    blockId: number;
    comment?: string;
    conversionRate?: number;
    currency: CurrencyEnum;
    dueDate: Date;
    electronic?: boolean;
    fulfillmentDate: Date;
    items?: any[];
    language: DocumentLanguageEnum;
    paid?: boolean;
    partnerId: number;
    paymentMethod: PaymentMethodEnum;
    settings?: DocumentSettings;
    type: DocumentInsertTypeEnum;
    vendorId?: string;
}
