import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The default client branding attributes to be imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you do not include sensitive information.</p> </important>
 */
export declare class DefaultImportClientBrandingAttributes extends SpeakeasyBase {
    forgotPasswordLink?: string;
    loginMessage?: Record<string, string>;
    logo?: string;
    supportEmail?: string;
    supportLink?: string;
}
