import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateSummary } from "./certificatesummary";
/**
 * Success
 */
export declare class ListCertificatesResponse extends SpeakeasyBase {
    certificateSummaryList?: CertificateSummary[];
    nextToken?: string;
}
