import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum POSTDeleteDomainVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDeleteDomainRequest extends SpeakeasyBase {
    action: POSTDeleteDomainActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDomainVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
