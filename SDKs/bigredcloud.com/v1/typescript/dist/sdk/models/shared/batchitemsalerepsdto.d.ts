import { SpeakeasyBase } from "../../../internal/utils";
import { SaleRepsDto } from "./salerepsdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemSaleRepsDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemSaleRepsDto extends SpeakeasyBase {
    item?: SaleRepsDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemSaleRepsDtoOpCodeEnum;
}
