import { SpeakeasyBase } from "../../../internal/utils";
import { SupplierDto } from "./supplierdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemSupplierDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemSupplierDto extends SpeakeasyBase {
    item?: SupplierDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemSupplierDtoOpCodeEnum;
}
