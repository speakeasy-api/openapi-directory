import { SpeakeasyBase } from "../../../internal/utils";
import { SupplierQueryDto } from "./supplierquerydto";
/**
 * OK
 */
export declare class PageResultSupplierQueryDto extends SpeakeasyBase {
    count?: number;
    items?: SupplierQueryDto[];
    nextPageLink?: string;
}
