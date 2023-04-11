import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETVpnConnectionDeviceTypesActionEnum {
    GetVpnConnectionDeviceTypes = "GetVpnConnectionDeviceTypes"
}
export declare enum GETGETVpnConnectionDeviceTypesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETVpnConnectionDeviceTypesRequest extends SpeakeasyBase {
    action: GETGETVpnConnectionDeviceTypesActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The maximum number of results returned by <code>GetVpnConnectionDeviceTypes</code> in paginated output. When this parameter is used, <code>GetVpnConnectionDeviceTypes</code> only returns <code>MaxResults</code> results in a single page along with a <code>NextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>GetVpnConnectionDeviceTypes</code> request with the returned <code>NextToken</code> value. This value can be between 200 and 1000. If this parameter is not used, then <code>GetVpnConnectionDeviceTypes</code> returns all results.
     */
    maxResults?: number;
    /**
     * The <code>NextToken</code> value returned from a previous paginated <code>GetVpnConnectionDeviceTypes</code> request where <code>MaxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>NextToken</code> value. This value is null when there are no more results to return.
     */
    nextToken?: string;
    version: GETGETVpnConnectionDeviceTypesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETVpnConnectionDeviceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
