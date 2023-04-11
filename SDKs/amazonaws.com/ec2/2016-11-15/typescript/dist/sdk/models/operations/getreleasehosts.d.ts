import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReleaseHostsActionEnum {
    ReleaseHosts = "ReleaseHosts"
}
export declare enum GETReleaseHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReleaseHostsRequest extends SpeakeasyBase {
    action: GETReleaseHostsActionEnum;
    /**
     * The IDs of the Dedicated Hosts to release.
     */
    hostId: string[];
    version: GETReleaseHostsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReleaseHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
