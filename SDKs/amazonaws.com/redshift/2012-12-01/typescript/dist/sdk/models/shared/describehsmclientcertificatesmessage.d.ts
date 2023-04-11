import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeHsmClientCertificatesMessage extends SpeakeasyBase {
    hsmClientCertificateIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
}
