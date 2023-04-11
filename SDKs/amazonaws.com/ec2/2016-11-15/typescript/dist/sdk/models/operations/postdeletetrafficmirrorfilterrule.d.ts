import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTrafficMirrorFilterRuleActionEnum {
    DeleteTrafficMirrorFilterRule = "DeleteTrafficMirrorFilterRule"
}
export declare enum POSTDeleteTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    action: POSTDeleteTrafficMirrorFilterRuleActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTrafficMirrorFilterRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
