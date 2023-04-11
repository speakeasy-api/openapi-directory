import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateSnapshotScheduleActionEnum {
    CreateSnapshotSchedule = "CreateSnapshotSchedule"
}
export declare enum POSTCreateSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateSnapshotScheduleRequest extends SpeakeasyBase {
    action: POSTCreateSnapshotScheduleActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateSnapshotScheduleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateSnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
