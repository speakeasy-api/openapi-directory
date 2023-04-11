import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateRuleActionEnum {
    CreateRule = "CreateRule"
}
export declare enum POSTCreateRuleVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTCreateRuleRequest extends SpeakeasyBase {
    action: POSTCreateRuleActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
