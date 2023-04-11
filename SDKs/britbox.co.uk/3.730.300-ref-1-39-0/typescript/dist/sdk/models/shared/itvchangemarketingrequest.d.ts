import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Updated marketing preferences & ITV profile token.
 */
export declare class ItvChangeMarketingRequest extends SpeakeasyBase {
    /**
     * Updated marketing preferences for account/profile.
     */
    emailOptIn: boolean;
    /**
     * The ITV profile token.
     */
    profileToken: string;
}
