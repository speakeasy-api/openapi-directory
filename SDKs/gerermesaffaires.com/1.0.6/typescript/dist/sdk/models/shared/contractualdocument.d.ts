import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContractualDocumentTypeEnum {
    Contract = "contract",
    EngagementLetter = "engagement-letter",
    Amendment = "amendment",
    PurchaseOrder = "purchase-order",
    DeliveryOrder = "delivery-order",
    Quotation = "quotation",
    Other = "other"
}
export declare class ContractualDocument extends SpeakeasyBase {
    amount?: string;
    author?: string;
    class?: string[];
    code?: string;
    comment?: string;
    date?: string;
    designation?: string;
    extension?: string;
    folderDate?: string;
    id?: string;
    reference?: string;
    startDate?: string;
    title?: string;
    type?: ContractualDocumentTypeEnum;
}
