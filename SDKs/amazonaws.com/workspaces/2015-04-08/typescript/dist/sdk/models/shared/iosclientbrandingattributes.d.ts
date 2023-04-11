import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The client branding attributes for iOS device types. These attributes are displayed on the iOS client login screen only.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important>
 */
export declare class IosClientBrandingAttributes extends SpeakeasyBase {
    forgotPasswordLink?: string;
    loginMessage?: Record<string, string>;
    logo2xUrl?: string;
    logo3xUrl?: string;
    logoUrl?: string;
    supportEmail?: string;
    supportLink?: string;
}
