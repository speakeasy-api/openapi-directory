import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyUserGroupMessage extends SpeakeasyBase {
    userGroupId: string;
    userIdsToAdd?: string[];
    userIdsToRemove?: string[];
}
