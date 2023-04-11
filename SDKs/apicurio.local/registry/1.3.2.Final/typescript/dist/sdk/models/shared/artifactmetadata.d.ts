import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
/**
 * Artifact was successfully created.
 */
export declare class ArtifactMetaData extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    id: string;
    labels?: string[];
    modifiedBy: string;
    modifiedOn: Date;
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
    state: ArtifactStateEnum;
    type: ArtifactTypeEnum;
    version: number;
}
