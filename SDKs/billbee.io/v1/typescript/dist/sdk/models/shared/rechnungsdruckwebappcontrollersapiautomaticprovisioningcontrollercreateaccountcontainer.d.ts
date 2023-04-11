import { SpeakeasyBase } from "../../../internal/utils";
import { RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress } from "./rechnungsdruckwebappcontrollersapiautomaticprovisioningcontrollercreateaccountcontaineruseraddress";
/**
 * Optionally specify the default vat mode of the user
 */
export declare enum RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5"
}
/**
 * Data used to create a new Billbee user account
 */
export declare class RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer extends SpeakeasyBase {
    /**
     * Set to true, if the user has accepted the Billbee terms &amp; conditions
     */
    acceptTerms?: boolean;
    /**
     * Represents the invoice address of a Billbee user
     */
    address?: RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress;
    /**
     * Specifies an billbee affiliate code to attach to the user
     */
    affiliateCouponCode?: string;
    /**
     * Optionally specify the default currency of the user
     */
    defaultCurrrency?: string;
    /**
     * Optionally specify the default vat index of the user
     */
    defaultVatIndex?: number;
    /**
     * Optionally specify the default vat mode of the user
     */
    defaultVatMode?: RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum;
    /**
     * The Email address of the user to create
     */
    eMail: string;
    password?: string;
    /**
     * Optionally specify the vat1 (normal) rate of the user
     */
    vat1Rate?: number;
    /**
     * Optionally specify the vat2 (reduced) rate of the user
     */
    vat2Rate?: number;
}
