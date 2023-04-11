import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class CustomAppointmentFieldType extends SpeakeasyBase {
    /**
     * Indicates that the object has been soft-deleted and should not be used
     */
    archived?: boolean;
    createdAt?: string;
    doctor?: string;
    /**
     * Description of the custom field
     */
    fieldDesc?: string;
    fieldName?: string;
    id?: number;
    /**
     * displayed order in patient's demographic page
     */
    order?: number;
    updatedAt?: string;
}
