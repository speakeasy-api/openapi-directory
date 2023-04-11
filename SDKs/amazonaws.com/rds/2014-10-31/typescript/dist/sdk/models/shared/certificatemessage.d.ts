import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateList } from "./certificatelist";
/**
 * Data returned by the <b>DescribeCertificates</b> action.
 */
export declare class CertificateMessage extends SpeakeasyBase {
    certificates?: CertificateList[];
    marker?: string;
}
