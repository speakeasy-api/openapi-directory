import { SpeakeasyBase } from "../../../internal/utils";
import { StatementOutput } from "./statementoutput";
import { StatementStateEnum } from "./statementstateenum";
/**
 * The statement or request for a particular action to occur in a session.
 */
export declare class Statement extends SpeakeasyBase {
    code?: string;
    completedOn?: number;
    id?: number;
    output?: StatementOutput;
    progress?: number;
    startedOn?: number;
    state?: StatementStateEnum;
}
