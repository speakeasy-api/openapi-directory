import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutCompositeAlarmActionEnum {
    PutCompositeAlarm = "PutCompositeAlarm"
}
export declare enum POSTPutCompositeAlarmVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutCompositeAlarmRequest extends SpeakeasyBase {
    action: POSTPutCompositeAlarmActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutCompositeAlarmVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutCompositeAlarmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
