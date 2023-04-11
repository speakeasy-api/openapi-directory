import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateIpamScopeActionEnum {
    CreateIpamScope = "CreateIpamScope"
}
export declare enum POSTCreateIpamScopeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateIpamScopeRequest extends SpeakeasyBase {
    action: POSTCreateIpamScopeActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateIpamScopeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateIpamScopeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
