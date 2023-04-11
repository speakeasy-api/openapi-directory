import { SpeakeasyBase } from "../../../internal/utils";
import { FileSource } from "./filesource";
import { MetricsSource } from "./metricssource";
/**
 * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
 */
export declare class DriftCheckBias extends SpeakeasyBase {
    configFile?: FileSource;
    postTrainingConstraints?: MetricsSource;
    preTrainingConstraints?: MetricsSource;
}
