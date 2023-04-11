import { SpeakeasyBase } from "../../../internal/utils";
import { RecordT } from "./record";
/**
 * Represents the output of a <code>GetRecords</code> operation.
 */
export declare class GetRecordsOutput extends SpeakeasyBase {
    nextShardIterator?: string;
    records?: RecordT[];
}
