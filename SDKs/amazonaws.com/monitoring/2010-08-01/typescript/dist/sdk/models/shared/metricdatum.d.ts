import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { StandardUnitEnum } from "./standardunitenum";
import { StatisticSet } from "./statisticset";
/**
 * Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric.
 */
export declare class MetricDatum extends SpeakeasyBase {
    counts?: number[];
    dimensions?: Dimension[];
    metricName: string;
    statisticValues?: StatisticSet;
    storageResolution?: number;
    timestamp?: Date;
    unit?: StandardUnitEnum;
    value?: number;
    values?: number[];
}
