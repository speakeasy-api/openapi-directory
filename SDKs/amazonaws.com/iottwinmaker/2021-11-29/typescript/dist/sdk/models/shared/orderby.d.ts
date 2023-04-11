import { SpeakeasyBase } from "../../../internal/utils";
import { OrderEnum } from "./orderenum";
/**
 * Filter criteria that orders the return output. It can be sorted in ascending or descending order.
 */
export declare class OrderBy extends SpeakeasyBase {
    order?: OrderEnum;
    propertyName: string;
}
