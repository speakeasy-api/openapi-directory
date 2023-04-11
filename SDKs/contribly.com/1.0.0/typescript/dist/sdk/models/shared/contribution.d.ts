import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { MediaUsage } from "./mediausage";
import { ModerationHistoryItem } from "./moderationhistoryitem";
import { Place } from "./place";
import { Via } from "./via";
/**
 * Contribution object to be created
 */
export declare class Contribution extends SpeakeasyBase {
    assignment?: Assignment;
    /**
     * The public attribution for this contribution. This will be the display name of the registered user or the contributor's first and last name if they provided them while making a non authenticated contribution. A blank attribution field indicates and anonymous contribution.
     */
    attribution?: string;
    body?: string;
    created?: Date;
    headline?: string;
    id?: string;
    mediaUsages?: MediaUsage[];
    moderationHistory?: ModerationHistoryItem[];
    place?: Place;
    urlWords?: string;
    via?: Via;
}
