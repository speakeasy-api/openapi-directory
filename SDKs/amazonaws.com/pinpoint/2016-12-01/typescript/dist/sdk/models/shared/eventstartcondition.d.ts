import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * Specifies the settings for an event that causes a journey activity to start.
 */
export declare class EventStartCondition extends SpeakeasyBase {
    /**
     * Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
     */
    eventFilter?: EventFilter;
    segmentId?: string;
}
