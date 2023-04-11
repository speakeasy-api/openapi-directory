import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETIpamAddressHistoryActionEnum {
    GetIpamAddressHistory = "GetIpamAddressHistory"
}
export declare enum GETGETIpamAddressHistoryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETIpamAddressHistoryRequest extends SpeakeasyBase {
    action: GETGETIpamAddressHistoryActionEnum;
    /**
     * The CIDR you want the history of. The CIDR can be an IPv4 or IPv6 IP address range. If you enter a /16 IPv4 CIDR, you will get records that match it exactly. You will not get records for any subnets within the /16 CIDR.
     */
    cidr: string;
    /**
     * A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The end of the time period for which you are looking for history. If you omit this option, it will default to the current time.
     */
    endTime?: Date;
    /**
     * The ID of the IPAM scope that the CIDR is in.
     */
    ipamScopeId: string;
    /**
     * The maximum number of historical results you would like returned per page. Defaults to 100.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    /**
     * The start of the time period for which you are looking for history. If you omit this option, it will default to the value of EndTime.
     */
    startTime?: Date;
    version: GETGETIpamAddressHistoryVersionEnum;
    /**
     * The ID of the VPC you want your history records filtered by.
     */
    vpcId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETIpamAddressHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
