import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyRuleActionEnum {
    ModifyRule = "ModifyRule"
}
export declare enum POSTModifyRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTModifyRuleRequest extends SpeakeasyBase {
    action: POSTModifyRuleActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
