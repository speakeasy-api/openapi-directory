import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthority } from "./certificateauthority";
/**
 * Success
 */
export declare class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
    certificateAuthorities?: CertificateAuthority[];
    nextToken?: string;
}
