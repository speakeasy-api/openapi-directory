import { SpeakeasyBase } from "../../../internal/utils";
import { PurchaseDto } from "./purchasedto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemPurchaseDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemPurchaseDto extends SpeakeasyBase {
    item?: PurchaseDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemPurchaseDtoOpCodeEnum;
}
