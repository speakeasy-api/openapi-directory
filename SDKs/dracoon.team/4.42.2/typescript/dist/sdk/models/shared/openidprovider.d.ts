import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OpenID Connect provider information
 */
export declare class OpenIdProvider extends SpeakeasyBase {
    /**
     * ID
     */
    id: number;
    /**
     * Is available for all customers
     */
    isGlobalAvailable: boolean;
    /**
     * Issuer identifier of the IDP
     *
     * @remarks
     *
     * The value is a case sensitive URL.
     */
    issuer: string;
    /**
     * Name of the claim which is used for the user mapping.
     */
    mappingClaim: string;
    /**
     * Name of the IDP
     */
    name: string;
    /**
     * URL of the user management UI.
     *
     * @remarks
     *
     * Use empty string to remove.
     */
    userManagementUrl?: string;
}
