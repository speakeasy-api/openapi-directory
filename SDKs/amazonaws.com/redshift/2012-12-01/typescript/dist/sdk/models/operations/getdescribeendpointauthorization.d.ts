import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEndpointAuthorizationActionEnum {
    DescribeEndpointAuthorization = "DescribeEndpointAuthorization"
}
export declare enum GETDescribeEndpointAuthorizationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeEndpointAuthorizationRequest extends SpeakeasyBase {
    /**
     * The Amazon Web Services account ID of either the cluster owner (grantor) or grantee. If <code>Grantee</code> parameter is true, then the <code>Account</code> value is of the grantor.
     */
    account?: string;
    action: GETDescribeEndpointAuthorizationActionEnum;
    /**
     * The cluster identifier of the cluster to access.
     */
    clusterIdentifier?: string;
    /**
     * Indicates whether to check authorization from a grantor or grantee point of view. If true, Amazon Redshift returns endpoint authorizations that you've been granted. If false (default), checks authorization from a grantor point of view.
     */
    grantee?: boolean;
    /**
     * An optional pagination token provided by a previous <code>DescribeEndpointAuthorization</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the <code>MaxRecords</code> parameter.
     */
    marker?: string;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is included in the response so that the remaining results can be retrieved.
     */
    maxRecords?: number;
    version: GETDescribeEndpointAuthorizationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEndpointAuthorizationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
