import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}
export declare enum GETDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GETDomainMetadataRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GETDomainMetadataActionEnum;
    /**
     * The name of the domain for which to display the metadata of.
     */
    domainName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETDomainMetadataVersionEnum;
}
export declare class GETDomainMetadataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
