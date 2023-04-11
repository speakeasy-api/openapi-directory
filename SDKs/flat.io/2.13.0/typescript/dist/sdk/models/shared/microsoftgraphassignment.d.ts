import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Microsoft Teams asignment
 */
export declare class MicrosoftGraphAssignment extends SpeakeasyBase {
    /**
     * Absolute link to this assignement in the Microsoft Teams web UI
     */
    alternateLink?: string;
    /**
     * List of categories where this assignment is published under
     */
    categories?: string[];
    /**
     * Identifier of the assignement assigned by Microsoft Teams
     */
    id?: string;
    /**
     * State of the assignment
     */
    state?: string;
}
