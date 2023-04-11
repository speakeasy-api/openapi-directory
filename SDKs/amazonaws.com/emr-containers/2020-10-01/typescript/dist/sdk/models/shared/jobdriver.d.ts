import { SpeakeasyBase } from "../../../internal/utils";
import { SparkSqlJobDriver } from "./sparksqljobdriver";
import { SparkSubmitJobDriver } from "./sparksubmitjobdriver";
/**
 * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
 */
export declare class JobDriver extends SpeakeasyBase {
    sparkSqlJobDriver?: SparkSqlJobDriver;
    sparkSubmitJobDriver?: SparkSubmitJobDriver;
}
