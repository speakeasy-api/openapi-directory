import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum POSTDeleteDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTDeleteDomainRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTDeleteDomainActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTDeleteDomainVersionEnum;
}
export declare class POSTDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
