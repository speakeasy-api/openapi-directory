import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsSource } from "./metricssource";
/**
 * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
 */
export declare class DriftCheckModelDataQuality extends SpeakeasyBase {
    constraints?: MetricsSource;
    statistics?: MetricsSource;
}
