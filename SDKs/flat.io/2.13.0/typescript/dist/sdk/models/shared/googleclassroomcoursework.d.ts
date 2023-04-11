import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A coursework on Google Classroom
 */
export declare class GoogleClassroomCoursework extends SpeakeasyBase {
    /**
     * Absolute link to this coursework in the Classroom web UI
     */
    alternateLink?: string;
    /**
     * Identifier of the coursework assigned by Classroom
     */
    id?: string;
    /**
     * State of the coursework
     */
    state?: string;
    /**
     * Identifier of the topic where the assignment is created
     */
    topicId?: string;
}
