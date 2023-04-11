import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Use this Clickwrap for Bundles?
 */
export declare enum PatchClickwrapsIdRequestBodyUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
/**
 * Use this Clickwrap for Inboxes?
 */
export declare enum PatchClickwrapsIdRequestBodyUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}
/**
 * Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.
 */
export declare enum PatchClickwrapsIdRequestBodyUseWithUsersEnum {
    None = "none",
    Require = "require"
}
export declare class PatchClickwrapsIdRequestBody extends SpeakeasyBase {
    /**
     * Body text of Clickwrap (supports Markdown formatting).
     */
    body?: string;
    /**
     * Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)
     */
    name?: string;
    /**
     * Use this Clickwrap for Bundles?
     */
    useWithBundles?: PatchClickwrapsIdRequestBodyUseWithBundlesEnum;
    /**
     * Use this Clickwrap for Inboxes?
     */
    useWithInboxes?: PatchClickwrapsIdRequestBodyUseWithInboxesEnum;
    /**
     * Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.
     */
    useWithUsers?: PatchClickwrapsIdRequestBodyUseWithUsersEnum;
}
export declare class PatchClickwrapsIdRequest extends SpeakeasyBase {
    requestBody?: PatchClickwrapsIdRequestBody;
    /**
     * Clickwrap ID.
     */
    id: number;
}
export declare class PatchClickwrapsIdResponse extends SpeakeasyBase {
    /**
     * The Clickwraps object.
     */
    clickwrapEntity?: shared.ClickwrapEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
