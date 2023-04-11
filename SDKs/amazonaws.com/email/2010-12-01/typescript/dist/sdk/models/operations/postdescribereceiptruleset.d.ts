import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeReceiptRuleSetActionEnum {
    DescribeReceiptRuleSet = "DescribeReceiptRuleSet"
}
export declare enum POSTDescribeReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeReceiptRuleSetRequest extends SpeakeasyBase {
    action: POSTDescribeReceiptRuleSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeReceiptRuleSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
