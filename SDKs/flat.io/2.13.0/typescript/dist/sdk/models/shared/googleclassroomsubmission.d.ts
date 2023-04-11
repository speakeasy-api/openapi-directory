import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A coursework submission on Google Classroom
 */
export declare class GoogleClassroomSubmission extends SpeakeasyBase {
    /**
     * Absolute link to this coursework in the Classroom web UI
     */
    alternateLink?: string;
    /**
     * Identifier of the coursework submission assigned by Classroom
     */
    id?: string;
    /**
     * State of the submission on Google Classroom
     */
    state?: string;
}
