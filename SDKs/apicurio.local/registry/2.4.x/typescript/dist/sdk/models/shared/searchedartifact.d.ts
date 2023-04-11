import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
/**
 * Models a single artifact from the result set returned when searching for artifacts.
 */
export declare class SearchedArtifact extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description?: string;
    /**
     * An ID of a single artifact group.
     */
    groupId?: string;
    /**
     * The ID of a single artifact.
     */
    id: string;
    labels?: string[];
    modifiedBy?: string;
    modifiedOn?: Date;
    name?: string;
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
}
