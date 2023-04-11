import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyClusterMaintenanceActionEnum {
    ModifyClusterMaintenance = "ModifyClusterMaintenance"
}
export declare enum GETModifyClusterMaintenanceVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyClusterMaintenanceRequest extends SpeakeasyBase {
    action: GETModifyClusterMaintenanceActionEnum;
    /**
     * A unique identifier for the cluster.
     */
    clusterIdentifier: string;
    /**
     * A boolean indicating whether to enable the deferred maintenance window.
     */
    deferMaintenance?: boolean;
    /**
     * An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 45 days or less.
     */
    deferMaintenanceDuration?: number;
    /**
     * A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.
     */
    deferMaintenanceEndTime?: Date;
    /**
     * A unique identifier for the deferred maintenance window.
     */
    deferMaintenanceIdentifier?: string;
    /**
     * A timestamp indicating the start time for the deferred maintenance window.
     */
    deferMaintenanceStartTime?: Date;
    version: GETModifyClusterMaintenanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyClusterMaintenanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
