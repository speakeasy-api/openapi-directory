import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerDto } from "./customerdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemCustomerDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemCustomerDto extends SpeakeasyBase {
    item?: CustomerDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemCustomerDtoOpCodeEnum;
}
