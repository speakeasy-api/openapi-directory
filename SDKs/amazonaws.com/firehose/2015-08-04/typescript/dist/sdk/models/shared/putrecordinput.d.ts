import { SpeakeasyBase } from "../../../internal/utils";
import { RecordT } from "./record";
export declare class PutRecordInput extends SpeakeasyBase {
    deliveryStreamName: string;
    record: RecordT;
}
