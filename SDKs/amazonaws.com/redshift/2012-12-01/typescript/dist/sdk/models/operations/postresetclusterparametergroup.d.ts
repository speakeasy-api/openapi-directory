import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetClusterParameterGroupActionEnum {
    ResetClusterParameterGroup = "ResetClusterParameterGroup"
}
export declare enum POSTResetClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTResetClusterParameterGroupRequest extends SpeakeasyBase {
    action: POSTResetClusterParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetClusterParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
