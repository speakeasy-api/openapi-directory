import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeRulesActionEnum {
    DescribeRules = "DescribeRules"
}
export declare enum GETDescribeRulesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeRulesRequest extends SpeakeasyBase {
    action: GETDescribeRulesActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    listenerArn?: string;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The maximum number of results to return with this call.
     */
    pageSize?: number;
    /**
     * The Amazon Resource Names (ARN) of the rules.
     */
    ruleArns?: string[];
    version: GETDescribeRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
