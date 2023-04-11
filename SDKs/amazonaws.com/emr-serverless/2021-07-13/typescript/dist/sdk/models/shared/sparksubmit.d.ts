import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configurations for the Spark submit job driver.
 */
export declare class SparkSubmit extends SpeakeasyBase {
    entryPoint: string;
    entryPointArguments?: string[];
    sparkSubmitParameters?: string;
}
