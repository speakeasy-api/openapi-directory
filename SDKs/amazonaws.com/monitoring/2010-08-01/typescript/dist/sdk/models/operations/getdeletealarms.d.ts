import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteAlarmsActionEnum {
    DeleteAlarms = "DeleteAlarms"
}
export declare enum GETDeleteAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETDeleteAlarmsRequest extends SpeakeasyBase {
    action: GETDeleteAlarmsActionEnum;
    /**
     * The alarms to be deleted. Do not enclose the alarm names in quote marks.
     */
    alarmNames: string[];
    version: GETDeleteAlarmsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteAlarmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
