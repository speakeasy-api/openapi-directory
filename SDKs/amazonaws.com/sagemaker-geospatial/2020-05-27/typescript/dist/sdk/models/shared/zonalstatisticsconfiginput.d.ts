import { SpeakeasyBase } from "../../../internal/utils";
import { ZonalStatisticsEnum } from "./zonalstatisticsenum";
/**
 * <p/>
 */
export declare class ZonalStatisticsConfigInput extends SpeakeasyBase {
    statistics: ZonalStatisticsEnum[];
    targetBands?: string[];
    zoneS3Path: string;
}
