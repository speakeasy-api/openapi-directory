import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ITV profile object with updated values & ITV profile token.
 */
export declare class ItvUpdateProfileRequest extends SpeakeasyBase {
    /**
     * The date of birth.
     */
    dateOfBirth?: string;
    /**
     * The email address.
     */
    email?: string;
    /**
     * Last name.
     */
    firstName?: string;
    /**
     * First name.
     */
    lastName?: string;
    /**
     * The postal code.
     */
    postcode?: string;
    /**
     * The ITV profile token.
     */
    profileToken: string;
    /**
     * The title.
     */
    title?: string;
}
