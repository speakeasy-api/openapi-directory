import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationStatistics } from "./calculationstatistics";
import { CalculationStatus } from "./calculationstatus";
/**
 * Success
 */
export declare class GetCalculationExecutionStatusResponse extends SpeakeasyBase {
    statistics?: CalculationStatistics;
    status?: CalculationStatus;
}
