import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyTargetGroupActionEnum {
    ModifyTargetGroup = "ModifyTargetGroup"
}
export declare enum POSTModifyTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTModifyTargetGroupRequest extends SpeakeasyBase {
    action: POSTModifyTargetGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyTargetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
