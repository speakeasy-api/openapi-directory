import { SpeakeasyBase } from "../../../internal/utils";
import { VatEnum } from "./vatenum";
export declare class DocumentItem extends SpeakeasyBase {
    grossAmount?: number;
    name?: string;
    netAmount?: number;
    netUnitAmount?: number;
    productId?: number;
    quantity?: number;
    vat?: VatEnum;
    vatAmount?: number;
}
