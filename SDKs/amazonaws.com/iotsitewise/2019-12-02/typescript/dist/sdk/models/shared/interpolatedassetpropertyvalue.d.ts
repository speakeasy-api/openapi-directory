import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInNanos } from "./timeinnanos";
import { Variant } from "./variant";
/**
 * Contains information about an interpolated asset property value.
 */
export declare class InterpolatedAssetPropertyValue extends SpeakeasyBase {
    /**
     * Contains a timestamp with optional nanosecond granularity.
     */
    timestamp: TimeInNanos;
    /**
     * Contains an asset property value (of a single type only).
     */
    value: Variant;
}
