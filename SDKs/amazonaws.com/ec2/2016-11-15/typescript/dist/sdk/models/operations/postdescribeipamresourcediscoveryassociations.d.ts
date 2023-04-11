import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeIpamResourceDiscoveryAssociationsActionEnum {
    DescribeIpamResourceDiscoveryAssociations = "DescribeIpamResourceDiscoveryAssociations"
}
export declare enum POSTDescribeIpamResourceDiscoveryAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeIpamResourceDiscoveryAssociationsRequest extends SpeakeasyBase {
    action: POSTDescribeIpamResourceDiscoveryAssociationsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeIpamResourceDiscoveryAssociationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeIpamResourceDiscoveryAssociationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
