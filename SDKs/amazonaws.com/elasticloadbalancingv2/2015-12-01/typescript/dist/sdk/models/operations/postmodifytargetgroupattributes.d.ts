import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyTargetGroupAttributesActionEnum {
    ModifyTargetGroupAttributes = "ModifyTargetGroupAttributes"
}
export declare enum POSTModifyTargetGroupAttributesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTModifyTargetGroupAttributesRequest extends SpeakeasyBase {
    action: POSTModifyTargetGroupAttributesActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyTargetGroupAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyTargetGroupAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
