import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteRuleActionEnum {
    DeleteRule = "DeleteRule"
}
export declare enum GETDeleteRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDeleteRuleRequest extends SpeakeasyBase {
    action: GETDeleteRuleActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    ruleArn: string;
    version: GETDeleteRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
