import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PatientFlagType extends SpeakeasyBase {
    /**
     * Indicates the flag type is soft-deleted and should not be used
     */
    archived?: boolean;
    color?: string;
    createdAt?: string;
    /**
     * Doctor who owns the flag type
     */
    doctor: number;
    id?: number;
    /**
     * Name of the patient flag type
     */
    name: string;
    /**
     * Priority of the flag type
     */
    priority?: number;
    updatedAt?: string;
}
