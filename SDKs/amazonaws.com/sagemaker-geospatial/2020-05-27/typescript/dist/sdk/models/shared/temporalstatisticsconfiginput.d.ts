import { SpeakeasyBase } from "../../../internal/utils";
import { GroupByEnum } from "./groupbyenum";
import { TemporalStatisticsEnum } from "./temporalstatisticsenum";
/**
 * <p/>
 */
export declare class TemporalStatisticsConfigInput extends SpeakeasyBase {
    groupBy?: GroupByEnum;
    statistics: TemporalStatisticsEnum[];
    targetBands?: string[];
}
