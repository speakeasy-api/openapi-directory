import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeRankExpressionsActionEnum {
    DescribeRankExpressions = "DescribeRankExpressions"
}
export declare enum POSTDescribeRankExpressionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTDescribeRankExpressionsRequest extends SpeakeasyBase {
    action: POSTDescribeRankExpressionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeRankExpressionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeRankExpressionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
