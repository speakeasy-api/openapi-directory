import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetReceiptRulePositionActionEnum {
    SetReceiptRulePosition = "SetReceiptRulePosition"
}
export declare enum GETSetReceiptRulePositionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETSetReceiptRulePositionRequest extends SpeakeasyBase {
    action: GETSetReceiptRulePositionActionEnum;
    /**
     * The name of the receipt rule after which to place the specified receipt rule.
     */
    after?: string;
    /**
     * The name of the receipt rule to reposition.
     */
    ruleName: string;
    /**
     * The name of the receipt rule set that contains the receipt rule to reposition.
     */
    ruleSetName: string;
    version: GETSetReceiptRulePositionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetReceiptRulePositionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
