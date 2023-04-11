import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListDomainNamesActionEnum {
    ListDomainNames = "ListDomainNames"
}
export declare enum GETListDomainNamesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETListDomainNamesRequest extends SpeakeasyBase {
    action: GETListDomainNamesActionEnum;
    version: GETListDomainNamesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListDomainNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
