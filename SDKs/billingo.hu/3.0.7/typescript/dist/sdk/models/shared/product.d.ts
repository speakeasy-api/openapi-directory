import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { VatEnum } from "./vatenum";
export declare class Product extends SpeakeasyBase {
    comment?: string;
    currency: CurrencyEnum;
    generalLedgerNumber?: string;
    generalLedgerTaxcode?: string;
    id?: number;
    name: string;
    netUnitPrice?: number;
    unit: string;
    vat: VatEnum;
}
export declare class ProductInput extends SpeakeasyBase {
    comment?: string;
    currency: CurrencyEnum;
    generalLedgerNumber?: string;
    generalLedgerTaxcode?: string;
    name: string;
    netUnitPrice?: number;
    unit: string;
    vat: VatEnum;
}
