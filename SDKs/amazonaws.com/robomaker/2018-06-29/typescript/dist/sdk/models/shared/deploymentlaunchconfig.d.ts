import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information for a deployment launch.
 */
export declare class DeploymentLaunchConfig extends SpeakeasyBase {
    environmentVariables?: Record<string, string>;
    launchFile: string;
    packageName: string;
    postLaunchFile?: string;
    preLaunchFile?: string;
}
