import { SpeakeasyBase } from "../../../internal/utils";
import { CalculationResult } from "./calculationresult";
import { CalculationStatistics } from "./calculationstatistics";
import { CalculationStatus } from "./calculationstatus";
/**
 * Success
 */
export declare class GetCalculationExecutionResponse extends SpeakeasyBase {
    calculationExecutionId?: string;
    description?: string;
    result?: CalculationResult;
    sessionId?: string;
    statistics?: CalculationStatistics;
    status?: CalculationStatus;
    workingDirectory?: string;
}
