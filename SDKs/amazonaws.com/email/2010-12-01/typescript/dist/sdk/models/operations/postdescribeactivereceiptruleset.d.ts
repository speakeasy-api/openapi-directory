import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeActiveReceiptRuleSetActionEnum {
    DescribeActiveReceiptRuleSet = "DescribeActiveReceiptRuleSet"
}
export declare enum POSTDescribeActiveReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeActiveReceiptRuleSetRequest extends SpeakeasyBase {
    action: POSTDescribeActiveReceiptRuleSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeActiveReceiptRuleSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeActiveReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
