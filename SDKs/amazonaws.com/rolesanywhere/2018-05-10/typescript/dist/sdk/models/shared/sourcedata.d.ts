import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The data field of the trust anchor depending on its type.
 */
export declare class SourceData extends SpeakeasyBase {
    acmPcaArn?: string;
    x509CertificateData?: string;
}
