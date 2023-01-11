import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
/**
 * Models a single artifact from the result set returned when searching for artifacts.
**/
export declare class SearchedVersion extends SpeakeasyBase {
    contentId: number;
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    labels?: string[];
    name?: string;
    properties?: Record<string, string>;
    state: ArtifactStateEnum;
    type: ArtifactTypeEnum;
    version: string;
}
