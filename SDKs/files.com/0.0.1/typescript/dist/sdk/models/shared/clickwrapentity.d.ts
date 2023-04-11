import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Use this Clickwrap for Bundles?
 */
export declare enum ClickwrapEntityUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
/**
 * Use this Clickwrap for Inboxes?
 */
export declare enum ClickwrapEntityUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
/**
 * Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.
 */
export declare enum ClickwrapEntityUseWithUsersEnum {
    None = "none",
    Require = "require"
}
/**
 * Create Clickwrap
 */
export declare class ClickwrapEntity extends SpeakeasyBase {
    /**
     * Body text of Clickwrap (supports Markdown formatting).
     */
    body?: string;
    /**
     * Clickwrap ID
     */
    id?: number;
    /**
     * Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)
     */
    name?: string;
    /**
     * Use this Clickwrap for Bundles?
     */
    useWithBundles?: ClickwrapEntityUseWithBundlesEnum;
    /**
     * Use this Clickwrap for Inboxes?
     */
    useWithInboxes?: ClickwrapEntityUseWithInboxesEnum;
    /**
     * Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.
     */
    useWithUsers?: ClickwrapEntityUseWithUsersEnum;
}
