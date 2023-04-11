import { SpeakeasyBase } from "../../../internal/utils";
import { GroupInfo } from "./groupinfo";
import { PendingGroupData } from "./pendinggroupdata";
import { PendingUserData } from "./pendinguserdata";
import { UserInfo } from "./userinfo";
/**
 * Acceptance state:
 *
 * @remarks
 *
 * * `ACCEPTED`
 *
 * * `WAITING`
 *
 * * `DENIED`
 */
export declare enum PendingAssignmentDataStateEnum {
    Accepted = "ACCEPTED",
    Denied = "DENIED",
    Waiting = "WAITING"
}
/**
 * Pending assignment information
 */
export declare class PendingAssignmentData extends SpeakeasyBase {
    /**
     * Group information
     */
    groupInfo: GroupInfo;
    /**
     * Pending group information
     */
    pendingGroupData: PendingGroupData;
    /**
     * Pending user information
     */
    pendingUserData: PendingUserData;
    /**
     * Room ID
     */
    roomId: number;
    /**
     * Room name
     */
    roomName: string;
    /**
     * Acceptance state:
     *
     * @remarks
     *
     * * `ACCEPTED`
     *
     * * `WAITING`
     *
     * * `DENIED`
     */
    state: PendingAssignmentDataStateEnum;
    /**
     * User information
     */
    userInfo: UserInfo;
}
