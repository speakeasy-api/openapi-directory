import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableAlarmActionsActionEnum {
    EnableAlarmActions = "EnableAlarmActions"
}
export declare enum GETEnableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETEnableAlarmActionsRequest extends SpeakeasyBase {
    action: GETEnableAlarmActionsActionEnum;
    /**
     * The names of the alarms.
     */
    alarmNames: string[];
    version: GETEnableAlarmActionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
