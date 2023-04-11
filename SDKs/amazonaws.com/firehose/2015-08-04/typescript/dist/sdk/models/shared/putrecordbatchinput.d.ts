import { SpeakeasyBase } from "../../../internal/utils";
import { RecordT } from "./record";
export declare class PutRecordBatchInput extends SpeakeasyBase {
    deliveryStreamName: string;
    records: RecordT[];
}
