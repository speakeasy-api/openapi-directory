import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetConsoleScreenshotActionEnum {
    GetConsoleScreenshot = "GetConsoleScreenshot"
}
export declare enum POSTGetConsoleScreenshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetConsoleScreenshotRequest extends SpeakeasyBase {
    action: POSTGetConsoleScreenshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetConsoleScreenshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetConsoleScreenshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
