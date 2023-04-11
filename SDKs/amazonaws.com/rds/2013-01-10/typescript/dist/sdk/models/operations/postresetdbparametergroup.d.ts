import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetDBParameterGroupActionEnum {
    ResetDBParameterGroup = "ResetDBParameterGroup"
}
export declare enum POSTResetDBParameterGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTResetDBParameterGroupRequest extends SpeakeasyBase {
    action: POSTResetDBParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetDBParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetDBParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
