import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetConsoleOutputActionEnum {
    GetConsoleOutput = "GetConsoleOutput"
}
export declare enum POSTGetConsoleOutputVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetConsoleOutputRequest extends SpeakeasyBase {
    action: POSTGetConsoleOutputActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetConsoleOutputVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetConsoleOutputResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
