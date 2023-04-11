import { SpeakeasyBase } from "../../../internal/utils";
import { LogLevelSummaryModel } from "./loglevelsummarymodel";
/**
 * OK
 */
export declare class GameSummaryModel extends SpeakeasyBase {
    logLevelData?: Record<string, any>[];
    logLevelSummary?: LogLevelSummaryModel[];
    message?: string;
}
