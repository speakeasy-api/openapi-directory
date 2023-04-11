import { SpeakeasyBase } from "../../../internal/utils";
export declare class RechnungsdruckWebAppControllersApiOrder extends SpeakeasyBase {
    canCreateAutoInvoice?: boolean;
    createdAt?: Date;
    externalId?: string;
    hasInvoice?: boolean;
    id?: number;
    invoiceCreatedAt?: Date;
    invoiceDate?: Date;
    invoiceNumber?: string;
    orderStateId?: number;
    orderStateText?: string;
    paidAt?: Date;
    shippedAt?: Date;
    shopName?: string;
    totalGross?: number;
}
