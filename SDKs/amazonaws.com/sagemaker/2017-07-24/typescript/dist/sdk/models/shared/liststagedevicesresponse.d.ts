import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceDeploymentSummary } from "./devicedeploymentsummary";
/**
 * Success
 */
export declare class ListStageDevicesResponse extends SpeakeasyBase {
    deviceDeploymentSummaries: DeviceDeploymentSummary[];
    nextToken?: string;
}
