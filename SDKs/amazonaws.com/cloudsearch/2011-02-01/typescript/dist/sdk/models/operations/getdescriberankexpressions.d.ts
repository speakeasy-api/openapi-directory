import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeRankExpressionsActionEnum {
    DescribeRankExpressions = "DescribeRankExpressions"
}
export declare enum GETDescribeRankExpressionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETDescribeRankExpressionsRequest extends SpeakeasyBase {
    action: GETDescribeRankExpressionsActionEnum;
    domainName: string;
    /**
     * Limits the <code>DescribeRankExpressions</code> response to the specified fields.
     */
    rankNames?: string[];
    version: GETDescribeRankExpressionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeRankExpressionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
