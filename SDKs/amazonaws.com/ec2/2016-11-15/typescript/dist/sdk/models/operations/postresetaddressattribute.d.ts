import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTResetAddressAttributeActionEnum {
    ResetAddressAttribute = "ResetAddressAttribute"
}
export declare enum POSTResetAddressAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTResetAddressAttributeRequest extends SpeakeasyBase {
    action: POSTResetAddressAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTResetAddressAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTResetAddressAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
