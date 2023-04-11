import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeReservedNodeExchangeStatusActionEnum {
    DescribeReservedNodeExchangeStatus = "DescribeReservedNodeExchangeStatus"
}
export declare enum GETDescribeReservedNodeExchangeStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeReservedNodeExchangeStatusRequest extends SpeakeasyBase {
    action: GETDescribeReservedNodeExchangeStatusActionEnum;
    /**
     * An optional pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request.
     */
    marker?: string;
    /**
     * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>Marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
     */
    maxRecords?: number;
    /**
     * The identifier of the reserved-node exchange request.
     */
    reservedNodeExchangeRequestId?: string;
    /**
     * The identifier of the source reserved node in a reserved-node exchange request.
     */
    reservedNodeId?: string;
    version: GETDescribeReservedNodeExchangeStatusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeReservedNodeExchangeStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
