import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteReceiptRuleActionEnum {
    DeleteReceiptRule = "DeleteReceiptRule"
}
export declare enum GETDeleteReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteReceiptRuleRequest extends SpeakeasyBase {
    action: GETDeleteReceiptRuleActionEnum;
    /**
     * The name of the receipt rule to delete.
     */
    ruleName: string;
    /**
     * The name of the receipt rule set that contains the receipt rule to delete.
     */
    ruleSetName: string;
    version: GETDeleteReceiptRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
