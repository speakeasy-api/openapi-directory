import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Assignment copy operation
 */
export declare class AssignmentCopy extends SpeakeasyBase {
    /**
     * An optional destination assignment where the original assignement will be copied. Must be a draft.
     */
    assignment?: string;
    /**
     * The destination classroom where the assignment will be copied
     */
    classroom?: string;
    /**
     * The publication (scheduled) date of the assignment.
     *
     * @remarks
     * If this one is specified, the assignment will only be listed to the teachers of the class.
     * Alternatively the existing `scheduledDate` from the copied assignment will be used.
     *
     */
    scheduledDate?: Date;
}
