import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactReference } from "./artifactreference";
import { ArtifactStateEnum } from "./artifactstateenum";
/**
 * Models a single artifact from the result set returned when searching for artifacts.
 */
export declare class SearchedVersion extends SpeakeasyBase {
    contentId: number;
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    labels?: string[];
    name?: string;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    properties?: Record<string, string>;
    references: ArtifactReference[];
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
