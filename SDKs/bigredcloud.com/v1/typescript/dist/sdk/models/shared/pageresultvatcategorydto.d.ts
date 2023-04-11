import { SpeakeasyBase } from "../../../internal/utils";
import { VatCategoryDto } from "./vatcategorydto";
/**
 * OK
 */
export declare class PageResultVatCategoryDto extends SpeakeasyBase {
    count?: number;
    items?: VatCategoryDto[];
    nextPageLink?: string;
}
