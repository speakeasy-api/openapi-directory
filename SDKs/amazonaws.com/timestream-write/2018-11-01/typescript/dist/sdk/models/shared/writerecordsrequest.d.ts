import { SpeakeasyBase } from "../../../internal/utils";
import { RecordT } from "./record";
export declare class WriteRecordsRequest extends SpeakeasyBase {
    commonAttributes?: RecordT;
    databaseName: string;
    records: RecordT[];
    tableName: string;
}
