import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLAlgorithmEnum } from "./automlalgorithmenum";
/**
 * The collection of algorithms run on a dataset for training the model candidates of an Autopilot job.
 */
export declare class AutoMLAlgorithmConfig extends SpeakeasyBase {
    autoMLAlgorithms: AutoMLAlgorithmEnum[];
}
