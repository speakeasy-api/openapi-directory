import { SpeakeasyBase } from "../../../internal/utils";
import { EventCodeEnum } from "./eventcodeenum";
/**
 * Log entry describing an event that involves GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.
 */
export declare class Event extends SpeakeasyBase {
    eventCode?: EventCodeEnum;
    eventId?: string;
    eventTime?: Date;
    message?: string;
    preSignedLogUrl?: string;
    resourceId?: string;
}
