import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateSigningCertificateActionEnum {
    UpdateSigningCertificate = "UpdateSigningCertificate"
}
/**
 *  The status you want to assign to the certificate. <code>Active</code> means that the certificate can be used for programmatic calls to Amazon Web Services <code>Inactive</code> means that the certificate cannot be used.
 */
export declare enum GETUpdateSigningCertificateStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum GETUpdateSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUpdateSigningCertificateRequest extends SpeakeasyBase {
    action: GETUpdateSigningCertificateActionEnum;
    /**
     * <p>The ID of the signing certificate you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
     */
    certificateId: string;
    /**
     *  The status you want to assign to the certificate. <code>Active</code> means that the certificate can be used for programmatic calls to Amazon Web Services <code>Inactive</code> means that the certificate cannot be used.
     */
    status: GETUpdateSigningCertificateStatusEnum;
    /**
     * <p>The name of the IAM user the signing certificate belongs to.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    userName?: string;
    version: GETUpdateSigningCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateSigningCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
