import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { UserTaskListResponse } from "./usertasklistresponse";
import { WorkspaceCompact } from "./workspacecompact";
/**
 * Contains keys `start_on` and `end_on` for the vacation dates for the user in this workspace. If `start_on` is null, the entire `vacation_dates` object will be null. If `end_on` is before today, the entire `vacation_dates` object will be null.
 */
export declare class WorkspaceMembershipResponseVacationDates extends SpeakeasyBase {
    /**
     * The day on which the user's vacation in this workspace ends, or null if there is no end date. This is a date with `YYYY-MM-DD` format.
     */
    endOn?: string;
    /**
     * The day on which the user's vacation in this workspace starts. This is a date with `YYYY-MM-DD` format.
     */
    startOn?: string;
}
/**
 * This object determines if a user is a member of a workspace.
 */
export declare class WorkspaceMembershipResponse extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Reflects if this user still a member of the workspace.
     */
    isActive?: boolean;
    /**
     * Reflects if this user is an admin of the workspace.
     */
    isAdmin?: boolean;
    /**
     * Reflects if this user is a guest of the workspace.
     */
    isGuest?: boolean;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    user?: UserCompact;
    userTaskList?: UserTaskListResponse;
    /**
     * Contains keys `start_on` and `end_on` for the vacation dates for the user in this workspace. If `start_on` is null, the entire `vacation_dates` object will be null. If `end_on` is before today, the entire `vacation_dates` object will be null.
     */
    vacationDates?: WorkspaceMembershipResponseVacationDates;
    workspace?: WorkspaceCompact;
}
