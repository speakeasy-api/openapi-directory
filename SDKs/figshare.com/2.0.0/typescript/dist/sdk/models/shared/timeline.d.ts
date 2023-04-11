import { SpeakeasyBase } from "../../../internal/utils";
export declare class Timeline extends SpeakeasyBase {
    /**
     * Online posted date
     */
    firstOnline: string;
    /**
     * Posted date
     */
    posted: string;
    /**
     * Date when the item was accepted for publication
     */
    publisherAcceptance: string;
    /**
     * Publish date
     */
    publisherPublication: string;
    /**
     * Revision date from curation (if curated)
     */
    revision: string;
    /**
     * Submission date in curation (if curated)
     */
    submission: string;
}
