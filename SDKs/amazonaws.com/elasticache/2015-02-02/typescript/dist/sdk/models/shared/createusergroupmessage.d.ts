import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateUserGroupMessage extends SpeakeasyBase {
    engine: string;
    tags?: TagList[];
    userGroupId: string;
    userIds?: string[];
}
