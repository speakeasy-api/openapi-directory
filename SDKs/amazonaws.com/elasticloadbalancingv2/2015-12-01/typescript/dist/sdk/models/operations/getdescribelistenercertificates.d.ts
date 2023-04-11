import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeListenerCertificatesActionEnum {
    DescribeListenerCertificates = "DescribeListenerCertificates"
}
export declare enum GETDescribeListenerCertificatesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeListenerCertificatesRequest extends SpeakeasyBase {
    action: GETDescribeListenerCertificatesActionEnum;
    /**
     * The Amazon Resource Names (ARN) of the listener.
     */
    listenerArn: string;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The maximum number of results to return with this call.
     */
    pageSize?: number;
    version: GETDescribeListenerCertificatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeListenerCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
