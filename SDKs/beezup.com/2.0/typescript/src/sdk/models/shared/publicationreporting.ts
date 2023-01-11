import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicationFeedReporting } from "./publicationfeedreporting";
import { PublicationTypeEnum } from "./publicationtypeenum";



// PublicationReporting
/** 
 * Model for a publication reporting, can have multiple feeds
**/
export class PublicationReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feeds", elemType: PublicationFeedReporting })
  feeds: PublicationFeedReporting[];

  @SpeakeasyMetadata({ data: "json, name=publicationType" })
  publicationType: PublicationTypeEnum;
}
