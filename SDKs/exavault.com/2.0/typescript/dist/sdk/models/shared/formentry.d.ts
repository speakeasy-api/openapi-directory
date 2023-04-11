import { SpeakeasyBase } from "../../../internal/utils";
import { FormEntryField } from "./formentryfield";
/**
 * Form entry status
 */
export declare enum FormEntryAttributesStatusEnum {
    Pending = "pending",
    Completed = "completed"
}
export declare class FormEntryAttributes extends SpeakeasyBase {
    /**
     * Timestamp of the submission
     */
    created?: Date;
    fields?: FormEntryField[];
    /**
     * Timestamp of the field modified date
     */
    modified?: Date;
    /**
     * Full paths to files associated with the form submission
     */
    paths?: string[];
    /**
     * Form entry status
     */
    status?: FormEntryAttributesStatusEnum;
}
/**
 * Contains the data submitted for a form.
 */
export declare class FormEntry extends SpeakeasyBase {
    attributes?: FormEntryAttributes;
    /**
     * Form entry id
     */
    id?: number;
    /**
     * Type of item. "formEntry"
     */
    type?: string;
}
