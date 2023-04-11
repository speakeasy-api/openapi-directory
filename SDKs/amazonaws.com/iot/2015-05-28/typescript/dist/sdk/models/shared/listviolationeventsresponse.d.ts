import { SpeakeasyBase } from "../../../internal/utils";
import { ViolationEvent } from "./violationevent";
/**
 * Success
 */
export declare class ListViolationEventsResponse extends SpeakeasyBase {
    nextToken?: string;
    violationEvents?: ViolationEvent[];
}
