import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsSource } from "./metricssource";
/**
 * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
 */
export declare class DriftCheckModelQuality extends SpeakeasyBase {
    constraints?: MetricsSource;
    statistics?: MetricsSource;
}
