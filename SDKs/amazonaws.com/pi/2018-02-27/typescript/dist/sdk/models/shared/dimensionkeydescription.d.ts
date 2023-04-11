import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that includes the requested dimension key values and aggregated metric values within a dimension group.
 */
export declare class DimensionKeyDescription extends SpeakeasyBase {
    additionalMetrics?: Record<string, number>;
    dimensions?: Record<string, string>;
    partitions?: number[];
    total?: number;
}
