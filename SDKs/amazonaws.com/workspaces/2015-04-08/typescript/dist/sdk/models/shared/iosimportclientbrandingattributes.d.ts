import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The client branding attributes to import for iOS device types. These attributes are displayed on the iOS client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important>
 */
export declare class IosImportClientBrandingAttributes extends SpeakeasyBase {
    forgotPasswordLink?: string;
    loginMessage?: Record<string, string>;
    logo?: string;
    logo2x?: string;
    logo3x?: string;
    supportEmail?: string;
    supportLink?: string;
}
