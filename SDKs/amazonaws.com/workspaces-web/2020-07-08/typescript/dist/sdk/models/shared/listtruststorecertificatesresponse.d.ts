import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateSummary } from "./certificatesummary";
/**
 * Success
 */
export declare class ListTrustStoreCertificatesResponse extends SpeakeasyBase {
    certificateList?: CertificateSummary[];
    nextToken?: string;
    trustStoreArn?: string;
}
