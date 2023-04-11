import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyInstanceAttributeActionEnum {
    ModifyInstanceAttribute = "ModifyInstanceAttribute"
}
export declare enum POSTModifyInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyInstanceAttributeRequest extends SpeakeasyBase {
    action: POSTModifyInstanceAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyInstanceAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyInstanceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
