import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBParameterGroupActionEnum {
    ModifyDBParameterGroup = "ModifyDBParameterGroup"
}
export declare enum POSTModifyDBParameterGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class POSTModifyDBParameterGroupRequest extends SpeakeasyBase {
    action: POSTModifyDBParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
