import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";
/**
 * Success
 */
export declare class GetInstancesHealthStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    status?: Record<string, HealthStatusEnum>;
}
