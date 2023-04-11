import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventSelector } from "./eventselector";
/**
 * Success
 */
export declare class PutEventSelectorsResponse extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    eventSelectors?: EventSelector[];
    trailARN?: string;
}
