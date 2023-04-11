import { SpeakeasyBase } from "../../../internal/utils";
import { RejectedLogEventsInfo } from "./rejectedlogeventsinfo";
/**
 * Success
 */
export declare class PutLogEventsResponse extends SpeakeasyBase {
    nextSequenceToken?: string;
    rejectedLogEventsInfo?: RejectedLogEventsInfo;
}
