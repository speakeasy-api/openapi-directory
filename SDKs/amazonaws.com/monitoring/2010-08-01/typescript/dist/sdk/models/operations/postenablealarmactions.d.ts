import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableAlarmActionsActionEnum {
    EnableAlarmActions = "EnableAlarmActions"
}
export declare enum POSTEnableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTEnableAlarmActionsRequest extends SpeakeasyBase {
    action: POSTEnableAlarmActionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableAlarmActionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
