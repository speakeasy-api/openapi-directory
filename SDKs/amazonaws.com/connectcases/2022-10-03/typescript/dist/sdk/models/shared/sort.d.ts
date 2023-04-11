import { SpeakeasyBase } from "../../../internal/utils";
import { OrderEnum } from "./orderenum";
/**
 * A structured set of sort terms.
 */
export declare class Sort extends SpeakeasyBase {
    fieldId: string;
    sortOrder: OrderEnum;
}
