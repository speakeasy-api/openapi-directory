import { SpeakeasyBase } from "../../../internal/utils";
import { RecordT } from "./record";
import { ResultSetMetadata } from "./resultsetmetadata";
/**
 * <p>The result set returned by a SQL statement.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>
 */
export declare class ResultFrame extends SpeakeasyBase {
    records?: RecordT[];
    resultSetMetadata?: ResultSetMetadata;
}
