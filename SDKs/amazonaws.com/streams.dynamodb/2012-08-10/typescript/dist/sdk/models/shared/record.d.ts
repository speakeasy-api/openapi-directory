import { SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";
import { OperationTypeEnum } from "./operationtypeenum";
import { StreamRecord } from "./streamrecord";
/**
 * A description of a unique event within a stream.
 */
export declare class RecordT extends SpeakeasyBase {
    awsRegion?: string;
    dynamodb?: StreamRecord;
    eventID?: string;
    eventName?: OperationTypeEnum;
    eventSource?: string;
    eventVersion?: string;
    userIdentity?: Identity;
}
