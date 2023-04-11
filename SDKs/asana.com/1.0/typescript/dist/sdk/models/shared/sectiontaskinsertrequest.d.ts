import { SpeakeasyBase } from "../../../internal/utils";
export declare class SectionTaskInsertRequest extends SpeakeasyBase {
    /**
     * An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.
     */
    insertAfter?: string;
    /**
     * An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.
     */
    insertBefore?: string;
    /**
     * The task to add to this section.
     */
    task: string;
}
