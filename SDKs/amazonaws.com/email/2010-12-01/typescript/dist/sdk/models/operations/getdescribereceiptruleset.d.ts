import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeReceiptRuleSetActionEnum {
    DescribeReceiptRuleSet = "DescribeReceiptRuleSet"
}
export declare enum GETDescribeReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeReceiptRuleSetRequest extends SpeakeasyBase {
    action: GETDescribeReceiptRuleSetActionEnum;
    /**
     * The name of the receipt rule set to describe.
     */
    ruleSetName: string;
    version: GETDescribeReceiptRuleSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
