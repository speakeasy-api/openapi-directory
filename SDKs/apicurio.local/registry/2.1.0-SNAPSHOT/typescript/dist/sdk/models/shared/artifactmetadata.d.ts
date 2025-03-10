import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactStateEnum } from "./artifactstateenum";
import { ArtifactTypeEnum } from "./artifacttypeenum";
export declare class ArtifactMetaData extends SpeakeasyBase {
    contentId: number;
    createdBy: string;
    createdOn: Date;
    description?: string;
    globalId: number;
    groupId?: string;
    id: string;
    labels?: string[];
    modifiedBy: string;
    modifiedOn: Date;
    name?: string;
    properties?: Record<string, string>;
    state: ArtifactStateEnum;
    type: ArtifactTypeEnum;
    version: string;
}
