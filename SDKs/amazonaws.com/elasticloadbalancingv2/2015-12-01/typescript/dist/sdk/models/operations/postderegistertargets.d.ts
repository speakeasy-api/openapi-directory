import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeregisterTargetsActionEnum {
    DeregisterTargets = "DeregisterTargets"
}
export declare enum POSTDeregisterTargetsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDeregisterTargetsRequest extends SpeakeasyBase {
    action: POSTDeregisterTargetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeregisterTargetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeregisterTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
