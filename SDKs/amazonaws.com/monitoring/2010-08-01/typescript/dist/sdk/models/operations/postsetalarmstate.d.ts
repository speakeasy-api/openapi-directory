import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetAlarmStateActionEnum {
    SetAlarmState = "SetAlarmState"
}
export declare enum POSTSetAlarmStateVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTSetAlarmStateRequest extends SpeakeasyBase {
    action: POSTSetAlarmStateActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetAlarmStateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetAlarmStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
