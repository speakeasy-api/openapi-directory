import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyDBProxyTargetGroupActionEnum {
    ModifyDBProxyTargetGroup = "ModifyDBProxyTargetGroup"
}
export declare enum POSTModifyDBProxyTargetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTModifyDBProxyTargetGroupRequest extends SpeakeasyBase {
    action: POSTModifyDBProxyTargetGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyDBProxyTargetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyDBProxyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
