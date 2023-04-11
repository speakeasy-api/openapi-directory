import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class GoalRequestInput extends SpeakeasyBase {
    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     */
    dueOn?: string;
    followers?: string[];
    /**
     * The notes of the goal with formatting as HTML.
     */
    htmlNotes?: string;
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization. Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.
     */
    isWorkspaceLevel?: boolean;
    /**
     * True if the goal is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * The name of the goal.
     */
    name?: string;
    /**
     * Free-form textual information associated with the goal (i.e. its description).
     */
    notes?: string;
    /**
     * The `gid` of a user.
     */
    owner?: string;
    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     */
    startOn?: string;
    /**
     * The current status of this goal. When the goal is open, its status can be `green`, `yellow`, and `red` to reflect "On Track", "At Risk", and "Off Track", respectively. When the goal is closed, the value can be `missed`, `achieved`, `partial`, or `dropped`.
     *
     * @remarks
     * *Note* you can only write to this property if `metric` is set.
     */
    status?: string;
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization.
     */
    team?: string;
    /**
     * The `gid` of a time period.
     */
    timePeriod?: string;
    /**
     * The `gid` of a workspace.
     */
    workspace?: string;
}
