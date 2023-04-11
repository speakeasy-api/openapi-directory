import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEndpointAccessActionEnum {
    DescribeEndpointAccess = "DescribeEndpointAccess"
}
export declare enum GETDescribeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeEndpointAccessRequest extends SpeakeasyBase {
    action: GETDescribeEndpointAccessActionEnum;
    /**
     * The cluster identifier associated with the described endpoint.
     */
    clusterIdentifier?: string;
    /**
     * The name of the endpoint to be described.
     */
    endpointName?: string;
    /**
     * An optional pagination token provided by a previous <code>DescribeEndpointAccess</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the <code>MaxRecords</code> parameter.
     */
    marker?: string;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is included in the response so that the remaining results can be retrieved.
     */
    maxRecords?: number;
    /**
     * The Amazon Web Services account ID of the owner of the cluster.
     */
    resourceOwner?: string;
    version: GETDescribeEndpointAccessVersionEnum;
    /**
     * The virtual private cloud (VPC) identifier with access to the cluster.
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
export declare class GETDescribeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
