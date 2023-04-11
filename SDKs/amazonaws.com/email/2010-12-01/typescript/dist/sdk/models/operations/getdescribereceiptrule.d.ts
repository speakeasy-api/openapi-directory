import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeReceiptRuleActionEnum {
    DescribeReceiptRule = "DescribeReceiptRule"
}
export declare enum GETDescribeReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeReceiptRuleRequest extends SpeakeasyBase {
    action: GETDescribeReceiptRuleActionEnum;
    /**
     * The name of the receipt rule.
     */
    ruleName: string;
    /**
     * The name of the receipt rule set that the receipt rule belongs to.
     */
    ruleSetName: string;
    version: GETDescribeReceiptRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
