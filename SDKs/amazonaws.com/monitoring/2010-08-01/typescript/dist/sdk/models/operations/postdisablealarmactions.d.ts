import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableAlarmActionsActionEnum {
    DisableAlarmActions = "DisableAlarmActions"
}
export declare enum POSTDisableAlarmActionsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDisableAlarmActionsRequest extends SpeakeasyBase {
    action: POSTDisableAlarmActionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableAlarmActionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableAlarmActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
