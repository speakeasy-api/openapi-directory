import { SpeakeasyBase } from "../../../internal/utils";
import { PublicationFeedReporting } from "./publicationfeedreporting";
import { PublicationTypeEnum } from "./publicationtypeenum";
/**
 * Model for a publication reporting, can have multiple feeds
 */
export declare class PublicationReporting extends SpeakeasyBase {
    /**
     * The feeds that were published
     */
    feeds: PublicationFeedReporting[];
    /**
     * The Publication Type
     */
    publicationType: PublicationTypeEnum;
}
