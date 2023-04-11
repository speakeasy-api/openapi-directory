import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Microsoft Teams submission
 */
export declare class MicrosoftGraphSubmission extends SpeakeasyBase {
    /**
     * Absolute link to this submission in the Microsoft Teams web UI
     */
    alternateLink?: string;
    /**
     * Identifier of the submission assigned by Microsoft Teams
     */
    id?: string;
    /**
     * State of the submission
     */
    state?: string;
}
