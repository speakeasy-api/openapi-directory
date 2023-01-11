import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { DocumentLanguageEnum } from "./documentlanguageenum";
import { PaymentMethodEnum } from "./paymentmethodenum";
import { DocumentSettings } from "./documentsettings";
import { DocumentInsertTypeEnum } from "./documentinserttypeenum";
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
