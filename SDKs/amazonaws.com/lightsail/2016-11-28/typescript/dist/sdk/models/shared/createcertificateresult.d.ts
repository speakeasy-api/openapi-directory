import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateSummary } from "./certificatesummary";
import { Operation } from "./operation";
/**
 * Success
 */
export declare class CreateCertificateResult extends SpeakeasyBase {
    certificate?: CertificateSummary;
    operations?: Operation[];
}
