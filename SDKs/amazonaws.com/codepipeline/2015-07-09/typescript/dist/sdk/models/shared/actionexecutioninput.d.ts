import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";
import { ArtifactDetail } from "./artifactdetail";
/**
 * Input information used for an action execution.
**/
export declare class ActionExecutionInput extends SpeakeasyBase {
    actionTypeId?: ActionTypeId;
    configuration?: Record<string, string>;
    inputArtifacts?: ArtifactDetail[];
    namespace?: string;
    region?: string;
    resolvedConfiguration?: Record<string, string>;
    roleArn?: string;
}
