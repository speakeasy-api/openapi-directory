import { SpeakeasyBase } from "../../../internal/utils";
import { Hive } from "./hive";
import { SparkSubmit } from "./sparksubmit";
/**
 * The driver that the job runs on.
 */
export declare class JobDriver extends SpeakeasyBase {
    hive?: Hive;
    sparkSubmit?: SparkSubmit;
}
