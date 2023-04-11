import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum POSTCreateDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTCreateDomainRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTCreateDomainActionEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTCreateDomainVersionEnum;
}
export declare class POSTCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
