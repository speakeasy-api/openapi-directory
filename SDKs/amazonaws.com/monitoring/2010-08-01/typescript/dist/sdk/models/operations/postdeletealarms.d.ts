import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteAlarmsActionEnum {
    DeleteAlarms = "DeleteAlarms"
}
export declare enum POSTDeleteAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDeleteAlarmsRequest extends SpeakeasyBase {
    action: POSTDeleteAlarmsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteAlarmsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteAlarmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
