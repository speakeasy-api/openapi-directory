import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteIpamScopeActionEnum {
    DeleteIpamScope = "DeleteIpamScope"
}
export declare enum POSTDeleteIpamScopeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteIpamScopeRequest extends SpeakeasyBase {
    action: POSTDeleteIpamScopeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteIpamScopeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteIpamScopeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
