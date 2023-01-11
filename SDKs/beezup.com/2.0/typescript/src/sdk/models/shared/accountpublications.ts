import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountPublicationsLinks } from "./accountpublicationslinks";
import { PublicationReporting } from "./publicationreporting";



// AccountPublications
/** 
 * The publication history for an account
**/
export class AccountPublications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: AccountPublicationsLinks;

  @SpeakeasyMetadata({ data: "json, name=publications", elemType: PublicationReporting })
  publications: PublicationReporting[];
}
