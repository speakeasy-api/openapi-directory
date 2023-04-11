import { SpeakeasyBase } from "../../../internal/utils";
import { ProductDto } from "./productdto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemProductDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemProductDto extends SpeakeasyBase {
    item?: ProductDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemProductDtoOpCodeEnum;
}
