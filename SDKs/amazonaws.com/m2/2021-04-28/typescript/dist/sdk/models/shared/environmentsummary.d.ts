import { SpeakeasyBase } from "../../../internal/utils";
import { EngineTypeEnum } from "./enginetypeenum";
import { EnvironmentLifecycleEnum } from "./environmentlifecycleenum";
/**
 * Contains a subset of the possible runtime environment attributes. Used in the environment list.
 */
export declare class EnvironmentSummary extends SpeakeasyBase {
    creationTime: Date;
    engineType: EngineTypeEnum;
    engineVersion: string;
    environmentArn: string;
    environmentId: string;
    instanceType: string;
    name: string;
    status: EnvironmentLifecycleEnum;
}
