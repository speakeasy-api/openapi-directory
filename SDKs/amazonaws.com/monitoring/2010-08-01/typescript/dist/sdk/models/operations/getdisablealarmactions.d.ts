import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableAlarmActionsActionEnum {
    DisableAlarmActions = "DisableAlarmActions"
}
export declare enum GETDisableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETDisableAlarmActionsRequest extends SpeakeasyBase {
    action: GETDisableAlarmActionsActionEnum;
    /**
     * The names of the alarms.
     */
    alarmNames: string[];
    version: GETDisableAlarmActionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
