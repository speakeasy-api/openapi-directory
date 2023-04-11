import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteRuleActionEnum {
    DeleteRule = "DeleteRule"
}
export declare enum POSTDeleteRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDeleteRuleRequest extends SpeakeasyBase {
    action: POSTDeleteRuleActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
