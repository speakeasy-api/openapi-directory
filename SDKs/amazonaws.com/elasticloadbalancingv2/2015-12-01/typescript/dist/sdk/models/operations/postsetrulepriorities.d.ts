import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetRulePrioritiesActionEnum {
    SetRulePriorities = "SetRulePriorities"
}
export declare enum POSTSetRulePrioritiesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTSetRulePrioritiesRequest extends SpeakeasyBase {
    action: POSTSetRulePrioritiesActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetRulePrioritiesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetRulePrioritiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
