import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeInsightRulesActionEnum {
    DescribeInsightRules = "DescribeInsightRules"
}
export declare enum GETDescribeInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETDescribeInsightRulesRequest extends SpeakeasyBase {
    action: GETDescribeInsightRulesActionEnum;
    /**
     * The maximum number of results to return in one operation. If you omit this parameter, the default of 500 is used.
     */
    maxResults?: number;
    /**
     * Include this value, if it was returned by the previous operation, to get the next set of rules.
     */
    nextToken?: string;
    version: GETDescribeInsightRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
