import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum PendingAssignmentStateEnum {
    Accepted = "ACCEPTED",
    Denied = "DENIED",
    Waiting = "WAITING"
}
/**
 * Pending assignment information
 */
export declare class PendingAssignment extends SpeakeasyBase {
    /**
     * Unique identifier for the group
     */
    groupId: number;
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
    state: PendingAssignmentStateEnum;
    /**
     * Unique identifier for the user
     */
    userId: number;
}
