import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskRemoveFollowersRequest extends SpeakeasyBase {
    /**
     * An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.
     */
    followers: string[];
}
