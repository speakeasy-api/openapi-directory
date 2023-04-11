import { SpeakeasyBase } from "../../../internal/utils";
import { DesiredConfiguration } from "./desiredconfiguration";
import { InstanceRefreshProgressDetails } from "./instancerefreshprogressdetails";
import { InstanceRefreshStatusEnum } from "./instancerefreshstatusenum";
import { RefreshPreferences } from "./refreshpreferences";
import { RollbackDetails } from "./rollbackdetails";
/**
 * Describes an instance refresh for an Auto Scaling group.
 */
export declare class InstanceRefresh extends SpeakeasyBase {
    autoScalingGroupName?: string;
    desiredConfiguration?: DesiredConfiguration;
    endTime?: Date;
    instanceRefreshId?: string;
    instancesToUpdate?: number;
    percentageComplete?: number;
    /**
     * Describes the preferences for an instance refresh.
     */
    preferences?: RefreshPreferences;
    progressDetails?: InstanceRefreshProgressDetails;
    rollbackDetails?: RollbackDetails;
    startTime?: Date;
    status?: InstanceRefreshStatusEnum;
    statusReason?: string;
}
