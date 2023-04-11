import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Returns default client branding attributes that were imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you don't include sensitive information.</p> </important>
 */
export declare class DefaultClientBrandingAttributes extends SpeakeasyBase {
    forgotPasswordLink?: string;
    loginMessage?: Record<string, string>;
    logoUrl?: string;
    supportEmail?: string;
    supportLink?: string;
}
