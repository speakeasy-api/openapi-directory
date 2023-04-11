import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableFastLaunchActionEnum {
    DisableFastLaunch = "DisableFastLaunch"
}
export declare enum POSTDisableFastLaunchVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisableFastLaunchRequest extends SpeakeasyBase {
    action: POSTDisableFastLaunchActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableFastLaunchVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableFastLaunchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
