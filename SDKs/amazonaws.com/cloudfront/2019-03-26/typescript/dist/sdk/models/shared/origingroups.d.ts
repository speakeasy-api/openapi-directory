import { SpeakeasyBase } from "../../../internal/utils";
import { OriginGroupList } from "./origingrouplist";
/**
 * A complex data type for the origin groups specified for a distribution.
 */
export declare class OriginGroups extends SpeakeasyBase {
    items?: OriginGroupList[];
    quantity: number;
}
