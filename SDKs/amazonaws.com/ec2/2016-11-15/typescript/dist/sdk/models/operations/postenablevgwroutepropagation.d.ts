import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableVgwRoutePropagationActionEnum {
    EnableVgwRoutePropagation = "EnableVgwRoutePropagation"
}
export declare enum POSTEnableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableVgwRoutePropagationRequest extends SpeakeasyBase {
    action: POSTEnableVgwRoutePropagationActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableVgwRoutePropagationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableVgwRoutePropagationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
