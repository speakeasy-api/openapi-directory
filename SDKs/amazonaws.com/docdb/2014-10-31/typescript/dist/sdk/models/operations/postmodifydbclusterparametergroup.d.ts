import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBClusterParameterGroupActionEnum {
    ModifyDBClusterParameterGroup = "ModifyDBClusterParameterGroup"
}
export declare enum POSTModifyDBClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTModifyDBClusterParameterGroupRequest extends SpeakeasyBase {
    action: POSTModifyDBClusterParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBClusterParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
