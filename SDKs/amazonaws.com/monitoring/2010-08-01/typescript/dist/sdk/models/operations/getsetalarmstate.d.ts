import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetAlarmStateActionEnum {
    SetAlarmState = "SetAlarmState"
}
/**
 * The value of the state.
 */
export declare enum GETSetAlarmStateStateValueEnum {
    Ok = "OK",
    Alarm = "ALARM",
    InsufficientData = "INSUFFICIENT_DATA"
}
export declare enum GETSetAlarmStateVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETSetAlarmStateRequest extends SpeakeasyBase {
    action: GETSetAlarmStateActionEnum;
    /**
     * The name of the alarm.
     */
    alarmName: string;
    /**
     * The reason that this alarm is set to this specific state, in text format.
     */
    stateReason: string;
    /**
     * <p>The reason that this alarm is set to this specific state, in JSON format.</p> <p>For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.</p>
     */
    stateReasonData?: string;
    /**
     * The value of the state.
     */
    stateValue: GETSetAlarmStateStateValueEnum;
    version: GETSetAlarmStateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetAlarmStateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
