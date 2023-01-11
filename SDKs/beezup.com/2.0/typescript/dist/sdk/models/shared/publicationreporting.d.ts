import { SpeakeasyBase } from "../../../internal/utils";
import { PublicationFeedReporting } from "./publicationfeedreporting";
import { PublicationTypeEnum } from "./publicationtypeenum";
/**
 * Model for a publication reporting, can have multiple feeds
**/
export declare class PublicationReporting extends SpeakeasyBase {
    feeds: PublicationFeedReporting[];
    publicationType: PublicationTypeEnum;
}
