import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDeploymentLifecycleEnum } from "./applicationdeploymentlifecycleenum";
import { ApplicationLifecycleEnum } from "./applicationlifecycleenum";
import { ApplicationVersionLifecycleEnum } from "./applicationversionlifecycleenum";
import { EngineTypeEnum } from "./enginetypeenum";
/**
 * A subset of the possible application attributes. Used in the application list.
 */
export declare class ApplicationSummary extends SpeakeasyBase {
    applicationArn: string;
    applicationId: string;
    applicationVersion: number;
    creationTime: Date;
    deploymentStatus?: ApplicationDeploymentLifecycleEnum;
    description?: string;
    engineType: EngineTypeEnum;
    environmentId?: string;
    lastStartTime?: Date;
    name: string;
    status: ApplicationLifecycleEnum;
    versionStatus?: ApplicationVersionLifecycleEnum;
}
