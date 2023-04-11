import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableImageDeprecationActionEnum {
    DisableImageDeprecation = "DisableImageDeprecation"
}
export declare enum POSTDisableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisableImageDeprecationRequest extends SpeakeasyBase {
    action: POSTDisableImageDeprecationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableImageDeprecationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableImageDeprecationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
