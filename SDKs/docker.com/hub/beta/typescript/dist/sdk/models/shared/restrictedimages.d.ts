import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestrictedImages extends SpeakeasyBase {
    /**
     * Allow usage of official images if "enabled" is `true`.
     */
    allowOfficialImages?: boolean;
    /**
     * Allow usage of verified publisher images if "enabled" is `true`.
     */
    allowVerifiedPublishers?: boolean;
    /**
     * Whether or not to restrict image usage for users in the organization.
     */
    enabled?: boolean;
}
