import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDto } from "./paymentdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemPaymentDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemPaymentDto extends SpeakeasyBase {
    item?: PaymentDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemPaymentDtoOpCodeEnum;
}
