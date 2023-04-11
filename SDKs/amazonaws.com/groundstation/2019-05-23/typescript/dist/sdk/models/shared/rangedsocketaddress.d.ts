import { SpeakeasyBase } from "../../../internal/utils";
import { IntegerRange } from "./integerrange";
/**
 * A socket address with a port range.
 */
export declare class RangedSocketAddress extends SpeakeasyBase {
    name: string;
    portRange: IntegerRange;
}
