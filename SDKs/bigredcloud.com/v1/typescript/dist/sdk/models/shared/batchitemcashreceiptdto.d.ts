import { SpeakeasyBase } from "../../../internal/utils";
import { CashReceiptDto } from "./cashreceiptdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemCashReceiptDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemCashReceiptDto extends SpeakeasyBase {
    item?: CashReceiptDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemCashReceiptDtoOpCodeEnum;
}
