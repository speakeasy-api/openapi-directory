import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDescribeServiceUpdatesActionEnum {
    DescribeServiceUpdates = "DescribeServiceUpdates"
}
export declare enum GETDescribeServiceUpdatesVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDescribeServiceUpdatesRequest extends SpeakeasyBase {
    action: GETDescribeServiceUpdatesActionEnum;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
     */
    marker?: string;
    /**
     * The maximum number of records to include in the response
     */
    maxRecords?: number;
    /**
     * The unique ID of the service update
     */
    serviceUpdateName?: string;
    /**
     * The status of the service update
     */
    serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];
    version: GETDescribeServiceUpdatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeServiceUpdatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
