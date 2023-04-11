import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDomainEndpointOptionsActionEnum {
    DescribeDomainEndpointOptions = "DescribeDomainEndpointOptions"
}
export declare enum POSTDescribeDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDescribeDomainEndpointOptionsRequest extends SpeakeasyBase {
    action: POSTDescribeDomainEndpointOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDomainEndpointOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDomainEndpointOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
