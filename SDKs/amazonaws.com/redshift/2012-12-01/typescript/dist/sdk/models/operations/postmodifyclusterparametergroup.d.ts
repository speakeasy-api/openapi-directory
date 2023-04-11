import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyClusterParameterGroupActionEnum {
    ModifyClusterParameterGroup = "ModifyClusterParameterGroup"
}
export declare enum POSTModifyClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTModifyClusterParameterGroupRequest extends SpeakeasyBase {
    action: POSTModifyClusterParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyClusterParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
