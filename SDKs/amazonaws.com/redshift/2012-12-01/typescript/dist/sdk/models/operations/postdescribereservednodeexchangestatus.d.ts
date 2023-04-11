import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeReservedNodeExchangeStatusActionEnum {
    DescribeReservedNodeExchangeStatus = "DescribeReservedNodeExchangeStatus"
}
export declare enum POSTDescribeReservedNodeExchangeStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTDescribeReservedNodeExchangeStatusRequest extends SpeakeasyBase {
    action: POSTDescribeReservedNodeExchangeStatusActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeReservedNodeExchangeStatusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeReservedNodeExchangeStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
