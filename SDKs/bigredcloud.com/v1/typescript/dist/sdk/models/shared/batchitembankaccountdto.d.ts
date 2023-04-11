import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountDto } from "./bankaccountdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemBankAccountDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemBankAccountDto extends SpeakeasyBase {
    item?: BankAccountDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemBankAccountDtoOpCodeEnum;
}
