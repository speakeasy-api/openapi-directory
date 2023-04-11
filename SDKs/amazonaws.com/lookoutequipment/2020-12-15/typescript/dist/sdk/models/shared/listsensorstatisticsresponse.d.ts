import { SpeakeasyBase } from "../../../internal/utils";
import { SensorStatisticsSummary } from "./sensorstatisticssummary";
/**
 * Success
 */
export declare class ListSensorStatisticsResponse extends SpeakeasyBase {
    nextToken?: string;
    sensorStatisticsSummaries?: SensorStatisticsSummary[];
}
