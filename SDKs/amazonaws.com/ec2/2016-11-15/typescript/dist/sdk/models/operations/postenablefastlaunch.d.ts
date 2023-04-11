import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableFastLaunchActionEnum {
    EnableFastLaunch = "EnableFastLaunch"
}
export declare enum POSTEnableFastLaunchVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableFastLaunchRequest extends SpeakeasyBase {
    action: POSTEnableFastLaunchActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableFastLaunchVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableFastLaunchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
