import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReorderReceiptRuleSetActionEnum {
    ReorderReceiptRuleSet = "ReorderReceiptRuleSet"
}
export declare enum GETReorderReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETReorderReceiptRuleSetRequest extends SpeakeasyBase {
    action: GETReorderReceiptRuleSetActionEnum;
    /**
     * A list of the specified receipt rule set's receipt rules in the order that you want to put them.
     */
    ruleNames: string[];
    /**
     * The name of the receipt rule set to reorder.
     */
    ruleSetName: string;
    version: GETReorderReceiptRuleSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReorderReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
