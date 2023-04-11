import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
/**
 * The metadata of the artifact version matching the provided content.
 */
export declare class VersionMetaData extends SpeakeasyBase {
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
    name?: string;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    properties?: Record<string, string>;
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
    state?: ArtifactStateEnum;
    type: string;
    version: string;
}
