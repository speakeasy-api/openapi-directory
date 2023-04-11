import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class UserProfile extends SpeakeasyBase {
    /**
     * For staff members, this is their primary physician's ID. For doctors, it is their own ID.
     */
    doctor?: string;
    id?: string;
    /**
     * Mutually exclusive with `is_staff`
     */
    isDoctor?: string;
    /**
     * Mutually exclusive with `is_doctor`
     */
    isStaff?: string;
    /**
     * Permissions the user has.
     */
    permissions?: string;
    /**
     * The ID of the practice group this user belongs to. This can be used to identify users in the same practice.
     */
    practiceGroup?: string;
    username?: string;
}
