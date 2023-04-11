import { SpeakeasyBase } from "../../../internal/utils";
import { FileSource } from "./filesource";
import { MetricsSource } from "./metricssource";
/**
 * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
 */
export declare class DriftCheckExplainability extends SpeakeasyBase {
    configFile?: FileSource;
    constraints?: MetricsSource;
}
