import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformCommand } from "./platformcommand";
import { PlatformScriptKey } from "./platformscriptkey";
import { RunEnvironmentEnum } from "./runenvironmentenum";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * The custom script to run tests on source or target environments.
 */
export declare class StepAutomationConfiguration extends SpeakeasyBase {
    command?: PlatformCommand;
    runEnvironment?: RunEnvironmentEnum;
    scriptLocationS3Bucket?: string;
    scriptLocationS3Key?: PlatformScriptKey;
    targetType?: TargetTypeEnum;
}
