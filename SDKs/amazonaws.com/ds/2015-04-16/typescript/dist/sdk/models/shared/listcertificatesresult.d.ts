import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateInfo } from "./certificateinfo";
/**
 * Success
 */
export declare class ListCertificatesResult extends SpeakeasyBase {
    certificatesInfo?: CertificateInfo[];
    nextToken?: string;
}
