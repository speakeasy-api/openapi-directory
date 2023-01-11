import { SpeakeasyBase } from "../../../internal/utils";
import { UnitPriceTypeEnum } from "./unitpricetypeenum";
import { VatEnum } from "./vatenum";
export declare class DocumentProductData extends SpeakeasyBase {
    comment?: string;
    name: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    unitPriceType: UnitPriceTypeEnum;
    vat: VatEnum;
}
