import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class CustomPatientFieldType extends SpeakeasyBase {
    /**
     * Allowed values if needed. Values must be separated by comma `,`
     */
    allowedValues?: string;
    /**
     * Indicates that the object has been soft-deleted, and should not be used
     */
    archived?: boolean;
    description?: string;
    doctor: number;
    id?: number;
    name: string;
    /**
     * Custom Patient Demographics with `template_name` set can be inserted into clinical notes via Form Builder. Only letters (a-z or A-Z), numbers (0-9) or underscore(_) are allowed for template name.
     */
    templateName?: string;
}
