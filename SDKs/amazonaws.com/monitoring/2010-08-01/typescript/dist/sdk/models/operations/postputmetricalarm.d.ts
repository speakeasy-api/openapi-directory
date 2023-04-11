import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutMetricAlarmActionEnum {
    PutMetricAlarm = "PutMetricAlarm"
}
export declare enum POSTPutMetricAlarmVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutMetricAlarmRequest extends SpeakeasyBase {
    action: POSTPutMetricAlarmActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutMetricAlarmVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutMetricAlarmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
