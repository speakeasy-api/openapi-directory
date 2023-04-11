import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateBasedAuthStatusEnumEnum } from "./certificatebasedauthstatusenumenum";
/**
 * Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.
 */
export declare class CertificateBasedAuthProperties extends SpeakeasyBase {
    certificateAuthorityArn?: string;
    status?: CertificateBasedAuthStatusEnumEnum;
}
