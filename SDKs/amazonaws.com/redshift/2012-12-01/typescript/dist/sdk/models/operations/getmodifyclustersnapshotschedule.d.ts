import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyClusterSnapshotScheduleActionEnum {
    ModifyClusterSnapshotSchedule = "ModifyClusterSnapshotSchedule"
}
export declare enum GETModifyClusterSnapshotScheduleVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyClusterSnapshotScheduleRequest extends SpeakeasyBase {
    action: GETModifyClusterSnapshotScheduleActionEnum;
    /**
     * A unique identifier for the cluster whose snapshot schedule you want to modify.
     */
    clusterIdentifier: string;
    /**
     * A boolean to indicate whether to remove the assoiciation between the cluster and the schedule.
     */
    disassociateSchedule?: boolean;
    /**
     * A unique alphanumeric identifier for the schedule that you want to associate with the cluster.
     */
    scheduleIdentifier?: string;
    version: GETModifyClusterSnapshotScheduleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyClusterSnapshotScheduleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
