import { SpeakeasyBase } from "../../../internal/utils";
import { SalesEntryDto } from "./salesentrydto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemSalesEntryDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemSalesEntryDto extends SpeakeasyBase {
    item?: SalesEntryDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemSalesEntryDtoOpCodeEnum;
}
