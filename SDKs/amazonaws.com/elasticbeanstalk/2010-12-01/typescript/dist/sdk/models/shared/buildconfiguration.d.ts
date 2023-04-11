import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeTypeEnum } from "./computetypeenum";
/**
 * Settings for an AWS CodeBuild build.
 */
export declare class BuildConfiguration extends SpeakeasyBase {
    artifactName?: string;
    codeBuildServiceRole: string;
    computeType?: ComputeTypeEnum;
    image: string;
    timeoutInMinutes?: number;
}
