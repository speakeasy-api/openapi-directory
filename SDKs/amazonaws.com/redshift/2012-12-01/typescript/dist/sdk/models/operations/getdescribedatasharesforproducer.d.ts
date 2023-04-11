import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDataSharesForProducerActionEnum {
    DescribeDataSharesForProducer = "DescribeDataSharesForProducer"
}
/**
 * An identifier giving the status of a datashare in the producer. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.
 */
export declare enum GETDescribeDataSharesForProducerStatusEnum {
    Active = "ACTIVE",
    Authorized = "AUTHORIZED",
    PendingAuthorization = "PENDING_AUTHORIZATION",
    Deauthorized = "DEAUTHORIZED",
    Rejected = "REJECTED"
}
export declare enum GETDescribeDataSharesForProducerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeDataSharesForProducerRequest extends SpeakeasyBase {
    action: GETDescribeDataSharesForProducerActionEnum;
    /**
     * An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataSharesForProducer</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request.
     */
    marker?: string;
    /**
     * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
     */
    maxRecords?: number;
    /**
     * The Amazon Resource Name (ARN) of the producer that returns in the list of datashares.
     */
    producerArn?: string;
    /**
     * An identifier giving the status of a datashare in the producer. If this field is specified, Amazon Redshift returns the list of datashares that have the specified status.
     */
    status?: GETDescribeDataSharesForProducerStatusEnum;
    version: GETDescribeDataSharesForProducerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDataSharesForProducerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
