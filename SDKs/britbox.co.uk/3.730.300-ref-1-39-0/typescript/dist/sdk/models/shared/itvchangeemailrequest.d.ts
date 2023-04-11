import { SpeakeasyBase } from "../../../internal/utils";
/**
 * New email address & ITV profile token.
 */
export declare class ItvChangeEmailRequest extends SpeakeasyBase {
    /**
     * New email address for account/profile.
     */
    email: string;
    /**
     * The ITV profile token.
     */
    profileToken: string;
}
