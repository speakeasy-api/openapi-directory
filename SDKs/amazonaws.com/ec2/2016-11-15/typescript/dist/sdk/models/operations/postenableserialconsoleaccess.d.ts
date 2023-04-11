import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableSerialConsoleAccessActionEnum {
    EnableSerialConsoleAccess = "EnableSerialConsoleAccess"
}
export declare enum POSTEnableSerialConsoleAccessVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableSerialConsoleAccessRequest extends SpeakeasyBase {
    action: POSTEnableSerialConsoleAccessActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableSerialConsoleAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableSerialConsoleAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
