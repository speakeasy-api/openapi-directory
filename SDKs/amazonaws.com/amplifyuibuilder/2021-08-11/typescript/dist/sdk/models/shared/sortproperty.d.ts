import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * Describes how to sort the data that you bind to a component.
 */
export declare class SortProperty extends SpeakeasyBase {
    direction: SortDirectionEnum;
    field: string;
}
