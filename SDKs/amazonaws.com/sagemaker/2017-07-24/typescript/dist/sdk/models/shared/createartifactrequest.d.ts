import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSource } from "./artifactsource";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";
export declare class CreateArtifactRequest extends SpeakeasyBase {
    artifactName?: string;
    artifactType: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    properties?: Record<string, string>;
    source: ArtifactSource;
    tags?: Tag[];
}
