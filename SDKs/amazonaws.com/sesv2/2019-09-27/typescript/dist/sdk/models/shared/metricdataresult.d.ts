import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of a single metric data query.
 */
export declare class MetricDataResult extends SpeakeasyBase {
    id?: string;
    timestamps?: Date[];
    values?: number[];
}
