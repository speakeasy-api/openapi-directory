import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyFpgaImageAttributeActionEnum {
    ModifyFpgaImageAttribute = "ModifyFpgaImageAttribute"
}
export declare enum POSTModifyFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyFpgaImageAttributeRequest extends SpeakeasyBase {
    action: POSTModifyFpgaImageAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyFpgaImageAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyFpgaImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
