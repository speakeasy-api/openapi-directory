import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTReleaseHostsActionEnum {
    ReleaseHosts = "ReleaseHosts"
}
export declare enum POSTReleaseHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTReleaseHostsRequest extends SpeakeasyBase {
    action: POSTReleaseHostsActionEnum;
    requestBody?: Uint8Array;
    version: POSTReleaseHostsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTReleaseHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
