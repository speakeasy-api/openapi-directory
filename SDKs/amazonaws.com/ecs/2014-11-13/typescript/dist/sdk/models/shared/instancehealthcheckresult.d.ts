import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthCheckStateEnum } from "./instancehealthcheckstateenum";
import { InstanceHealthCheckTypeEnum } from "./instancehealthchecktypeenum";
/**
 * An object representing the result of a container instance health status check.
 */
export declare class InstanceHealthCheckResult extends SpeakeasyBase {
    lastStatusChange?: Date;
    lastUpdated?: Date;
    status?: InstanceHealthCheckStateEnum;
    type?: InstanceHealthCheckTypeEnum;
}
