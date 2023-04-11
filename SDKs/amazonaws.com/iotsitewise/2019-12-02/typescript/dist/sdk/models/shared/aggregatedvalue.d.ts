import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregates } from "./aggregates";
import { QualityEnum } from "./qualityenum";
/**
 * Contains aggregated asset property values (for example, average, minimum, and maximum).
 */
export declare class AggregatedValue extends SpeakeasyBase {
    quality?: QualityEnum;
    timestamp: Date;
    value: Aggregates;
}
