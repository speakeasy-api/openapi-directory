import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyImageAttributeActionEnum {
    ModifyImageAttribute = "ModifyImageAttribute"
}
export declare enum POSTModifyImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyImageAttributeRequest extends SpeakeasyBase {
    action: POSTModifyImageAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyImageAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyImageAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
