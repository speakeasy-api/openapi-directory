import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyIpamScopeActionEnum {
    ModifyIpamScope = "ModifyIpamScope"
}
export declare enum POSTModifyIpamScopeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyIpamScopeRequest extends SpeakeasyBase {
    action: POSTModifyIpamScopeActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyIpamScopeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyIpamScopeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
