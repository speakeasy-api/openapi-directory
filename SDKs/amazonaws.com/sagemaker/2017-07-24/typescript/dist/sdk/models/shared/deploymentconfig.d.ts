import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRollbackConfig } from "./autorollbackconfig";
import { BlueGreenUpdatePolicy } from "./bluegreenupdatepolicy";
/**
 * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
 */
export declare class DeploymentConfig extends SpeakeasyBase {
    autoRollbackConfiguration?: AutoRollbackConfig;
    blueGreenUpdatePolicy: BlueGreenUpdatePolicy;
}
