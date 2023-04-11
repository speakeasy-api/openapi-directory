import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthCheckResult } from "./instancehealthcheckresult";
import { InstanceHealthCheckStateEnum } from "./instancehealthcheckstateenum";
/**
 * An object representing the health status of the container instance.
 */
export declare class ContainerInstanceHealthStatus extends SpeakeasyBase {
    details?: InstanceHealthCheckResult[];
    overallStatus?: InstanceHealthCheckStateEnum;
}
