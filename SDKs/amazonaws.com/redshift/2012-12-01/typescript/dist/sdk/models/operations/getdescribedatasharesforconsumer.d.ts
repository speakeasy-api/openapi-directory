import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDataSharesForConsumerActionEnum {
    DescribeDataSharesForConsumer = "DescribeDataSharesForConsumer"
}
/**
 * An identifier giving the status of a datashare in the consumer cluster. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.
 */
export declare enum GETDescribeDataSharesForConsumerStatusEnum {
    Active = "ACTIVE",
    Available = "AVAILABLE"
}
export declare enum GETDescribeDataSharesForConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeDataSharesForConsumerRequest extends SpeakeasyBase {
    action: GETDescribeDataSharesForConsumerActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the consumer that returns in the list of datashares.
     */
    consumerArn?: string;
    /**
     * An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataSharesForConsumer</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request.
     */
    marker?: string;
    /**
     * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
     */
    maxRecords?: number;
    /**
     * An identifier giving the status of a datashare in the consumer cluster. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.
     */
    status?: GETDescribeDataSharesForConsumerStatusEnum;
    version: GETDescribeDataSharesForConsumerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDataSharesForConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
