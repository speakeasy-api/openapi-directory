import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { PatchOrchestratorFilter } from "./patchorchestratorfilter";
import { Target } from "./target";
export declare class DescribeMaintenanceWindowScheduleRequest extends SpeakeasyBase {
    filters?: PatchOrchestratorFilter[];
    maxResults?: number;
    nextToken?: string;
    resourceType?: MaintenanceWindowResourceTypeEnum;
    targets?: Target[];
    windowId?: string;
}
