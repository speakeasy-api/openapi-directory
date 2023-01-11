import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStore } from "./artifactstore";
import { StageDeclaration } from "./stagedeclaration";
/**
 * Represents the structure of actions and stages to be performed in the pipeline.
**/
export declare class PipelineDeclaration extends SpeakeasyBase {
    artifactStore?: ArtifactStore;
    artifactStores?: Record<string, ArtifactStore>;
    name: string;
    roleArn: string;
    stages: StageDeclaration[];
    version?: number;
}
