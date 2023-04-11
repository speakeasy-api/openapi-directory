import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum GETCreateDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GETCreateDomainRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GETCreateDomainActionEnum;
    /**
     * The name of the domain to create. The name can range between 3 and 255 characters and can contain the following characters: a-z, A-Z, 0-9, '_', '-', and '.'.
     */
    domainName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETCreateDomainVersionEnum;
}
export declare class GETCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
