import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The launch profile initialization script is used when start streaming session runs.
 */
export declare class LaunchProfileInitializationScript extends SpeakeasyBase {
    runtimeRoleArn?: string;
    script?: string;
    secureInitializationRoleArn?: string;
    studioComponentId?: string;
    studioComponentName?: string;
}
