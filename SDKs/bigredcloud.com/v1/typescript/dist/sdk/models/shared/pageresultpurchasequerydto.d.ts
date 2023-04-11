import { SpeakeasyBase } from "../../../internal/utils";
import { PurchaseQueryDto } from "./purchasequerydto";
/**
 * OK
 */
export declare class PageResultPurchaseQueryDto extends SpeakeasyBase {
    count?: number;
    items?: PurchaseQueryDto[];
    nextPageLink?: string;
}
