import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroupDetail } from "./dimensiongroupdetail";
/**
 * The available dimension information for a metric type.
 */
export declare class MetricDimensionGroups extends SpeakeasyBase {
    groups?: DimensionGroupDetail[];
    metric?: string;
}
