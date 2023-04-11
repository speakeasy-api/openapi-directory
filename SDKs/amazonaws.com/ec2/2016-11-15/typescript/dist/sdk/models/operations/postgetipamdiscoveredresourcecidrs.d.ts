import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetIpamDiscoveredResourceCidrsActionEnum {
    GetIpamDiscoveredResourceCidrs = "GetIpamDiscoveredResourceCidrs"
}
export declare enum POSTGetIpamDiscoveredResourceCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetIpamDiscoveredResourceCidrsRequest extends SpeakeasyBase {
    action: POSTGetIpamDiscoveredResourceCidrsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTGetIpamDiscoveredResourceCidrsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetIpamDiscoveredResourceCidrsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
