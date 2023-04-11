import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteServerCertificateActionEnum {
    DeleteServerCertificate = "DeleteServerCertificate"
}
export declare enum GETDeleteServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteServerCertificateRequest extends SpeakeasyBase {
    action: GETDeleteServerCertificateActionEnum;
    /**
     * <p>The name of the server certificate you want to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    serverCertificateName: string;
    version: GETDeleteServerCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteServerCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
