import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListDomainNamesActionEnum {
    ListDomainNames = "ListDomainNames"
}
export declare enum POSTListDomainNamesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTListDomainNamesRequest extends SpeakeasyBase {
    action: POSTListDomainNamesActionEnum;
    version: POSTListDomainNamesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListDomainNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
