import { SpeakeasyBase } from "../../../internal/utils";
import { StandbyWorkspaceRelationshipTypeEnum } from "./standbyworkspacerelationshiptypeenum";
import { WorkspaceStateEnum } from "./workspacestateenum";
/**
 * Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or primary WorkSpace related to the specified WorkSpace.
 */
export declare class RelatedWorkspaceProperties extends SpeakeasyBase {
    region?: string;
    state?: WorkspaceStateEnum;
    type?: StandbyWorkspaceRelationshipTypeEnum;
    workspaceId?: string;
}
