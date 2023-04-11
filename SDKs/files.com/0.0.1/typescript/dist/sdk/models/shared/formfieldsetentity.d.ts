import { SpeakeasyBase } from "../../../internal/utils";
import { FormFieldEntity } from "./formfieldentity";
/**
 * List Form Field Sets
 */
export declare class FormFieldSetEntity extends SpeakeasyBase {
    /**
     * Associated form fields
     */
    formFields?: FormFieldEntity[];
    /**
     * Layout of the form
     */
    formLayout?: number[];
    /**
     * Form field set id
     */
    id?: number;
    /**
     * Any associated InboxRegistrations or BundleRegistrations can be saved without providing company
     */
    skipCompany?: boolean;
    /**
     * Any associated InboxRegistrations or BundleRegistrations can be saved without providing email
     */
    skipEmail?: boolean;
    /**
     * Any associated InboxRegistrations or BundleRegistrations can be saved without providing name
     */
    skipName?: boolean;
    /**
     * Title to be displayed
     */
    title?: string;
}
