import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyCacheParameterGroupActionEnum {
    ModifyCacheParameterGroup = "ModifyCacheParameterGroup"
}
export declare enum POSTModifyCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTModifyCacheParameterGroupRequest extends SpeakeasyBase {
    action: POSTModifyCacheParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyCacheParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
