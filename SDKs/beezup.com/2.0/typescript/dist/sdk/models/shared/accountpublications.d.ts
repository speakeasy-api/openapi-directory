import { SpeakeasyBase } from "../../../internal/utils";
import { AccountPublicationsLinks } from "./accountpublicationslinks";
import { PublicationReporting } from "./publicationreporting";
/**
 * The publication history for an account
 */
export declare class AccountPublications extends SpeakeasyBase {
    links: AccountPublicationsLinks;
    /**
     * The recent publications for the requested account
     */
    publications: PublicationReporting[];
}
