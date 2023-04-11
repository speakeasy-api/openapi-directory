import { SpeakeasyBase } from "../../../internal/utils";
import { CashPaymentDto } from "./cashpaymentdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemCashPaymentDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemCashPaymentDto extends SpeakeasyBase {
    item?: CashPaymentDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemCashPaymentDtoOpCodeEnum;
}
