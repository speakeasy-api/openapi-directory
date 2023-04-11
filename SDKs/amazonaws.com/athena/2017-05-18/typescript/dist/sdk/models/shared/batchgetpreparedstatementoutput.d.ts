import { SpeakeasyBase } from "../../../internal/utils";
import { PreparedStatement } from "./preparedstatement";
import { UnprocessedPreparedStatementName } from "./unprocessedpreparedstatementname";
/**
 * Success
 */
export declare class BatchGetPreparedStatementOutput extends SpeakeasyBase {
    preparedStatements?: PreparedStatement[];
    unprocessedPreparedStatementNames?: UnprocessedPreparedStatementName[];
}
