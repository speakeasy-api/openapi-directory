import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class UserProfilesGroup extends SpeakeasyBase {
    /**
     * Group is archived or not
     */
    archived?: boolean;
    createdAt?: string;
    id?: number;
    /**
     * Users in this user group.
     */
    members?: string[];
    name?: string;
    /**
     * Practice group this user group belongs to
     */
    practiceGroup?: string;
    updatedAt?: string;
}
