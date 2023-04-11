import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyCertificatesActionEnum {
    ModifyCertificates = "ModifyCertificates"
}
export declare enum GETModifyCertificatesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyCertificatesRequest extends SpeakeasyBase {
    action: GETModifyCertificatesActionEnum;
    /**
     * <p>The new default certificate identifier to override the current one with.</p> <p>To determine the valid values, use the <code>describe-certificates</code> CLI command or the <code>DescribeCertificates</code> API operation.</p>
     */
    certificateIdentifier?: string;
    /**
     * A value that indicates whether to remove the override for the default certificate. If the override is removed, the default certificate is the system default.
     */
    removeCustomerOverride?: boolean;
    version: GETModifyCertificatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
