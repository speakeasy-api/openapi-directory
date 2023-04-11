import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetCacheParameterGroupActionEnum {
    ResetCacheParameterGroup = "ResetCacheParameterGroup"
}
export declare enum POSTResetCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTResetCacheParameterGroupRequest extends SpeakeasyBase {
    action: POSTResetCacheParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetCacheParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
