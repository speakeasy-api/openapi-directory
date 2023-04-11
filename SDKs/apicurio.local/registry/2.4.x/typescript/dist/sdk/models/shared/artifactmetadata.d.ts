import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactReference } from "./artifactreference";
import { ArtifactStateEnum } from "./artifactstateenum";
/**
 * Artifact was successfully created.
 */
export declare class ArtifactMetaData extends SpeakeasyBase {
    contentId: number;
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string;
    /**
     * The ID of a single artifact.
     */
    id: string;
    labels?: string[];
    modifiedBy: string;
    modifiedOn: Date;
    name?: string;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    properties?: Record<string, string>;
    references?: ArtifactReference[];
    /**
     * Describes the state of an artifact or artifact version.  The following states
     *
     * @remarks
     * are possible:
     *
     * * ENABLED
     * * DISABLED
     * * DEPRECATED
     *
     */
    state: ArtifactStateEnum;
    type: string;
    version: string;
}
