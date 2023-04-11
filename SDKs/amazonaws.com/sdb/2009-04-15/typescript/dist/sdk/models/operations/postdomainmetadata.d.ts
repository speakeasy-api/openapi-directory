import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}
export declare enum POSTDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTDomainMetadataRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTDomainMetadataActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTDomainMetadataVersionEnum;
}
export declare class POSTDomainMetadataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
