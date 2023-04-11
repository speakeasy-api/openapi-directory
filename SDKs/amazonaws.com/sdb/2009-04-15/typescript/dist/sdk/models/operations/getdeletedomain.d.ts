import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum GETDeleteDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GETDeleteDomainRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GETDeleteDomainActionEnum;
    /**
     * The name of the domain to delete.
     */
    domainName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETDeleteDomainVersionEnum;
}
export declare class GETDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
