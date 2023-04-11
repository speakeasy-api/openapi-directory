import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateArtifactRequest extends SpeakeasyBase {
    artifactArn: string;
    artifactName?: string;
    properties?: Record<string, string>;
    propertiesToRemove?: string[];
}
