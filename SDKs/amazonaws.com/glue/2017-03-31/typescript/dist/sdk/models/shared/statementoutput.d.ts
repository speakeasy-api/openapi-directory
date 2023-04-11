import { SpeakeasyBase } from "../../../internal/utils";
import { StatementOutputData } from "./statementoutputdata";
import { StatementStateEnum } from "./statementstateenum";
/**
 * The code execution output in JSON format.
 */
export declare class StatementOutput extends SpeakeasyBase {
    data?: StatementOutputData;
    errorName?: string;
    errorValue?: string;
    executionCount?: number;
    status?: StatementStateEnum;
    traceback?: string[];
}
