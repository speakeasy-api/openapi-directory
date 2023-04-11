import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetDBClusterParameterGroupActionEnum {
    ResetDBClusterParameterGroup = "ResetDBClusterParameterGroup"
}
export declare enum POSTResetDBClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTResetDBClusterParameterGroupRequest extends SpeakeasyBase {
    action: POSTResetDBClusterParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetDBClusterParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetDBClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
