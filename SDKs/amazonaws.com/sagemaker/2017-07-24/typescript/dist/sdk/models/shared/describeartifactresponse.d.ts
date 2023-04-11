import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSource } from "./artifactsource";
import { MetadataProperties } from "./metadataproperties";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeArtifactResponse extends SpeakeasyBase {
    artifactArn?: string;
    artifactName?: string;
    artifactType?: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    lineageGroupArn?: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    properties?: Record<string, string>;
    source?: ArtifactSource;
}
