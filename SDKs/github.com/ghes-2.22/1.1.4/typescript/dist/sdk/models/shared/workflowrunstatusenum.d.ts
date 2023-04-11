/**
 * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`. For a list of the possible `status` and `conclusion` options, see "[Create a check run](https://docs.github.com/enterprise-server@2.22/rest/reference/checks#create-a-check-run)."
 */
export declare enum WorkflowRunStatusEnum {
    Completed = "completed",
    ActionRequired = "action_required",
    Cancelled = "cancelled",
    Failure = "failure",
    Neutral = "neutral",
    Skipped = "skipped",
    Stale = "stale",
    Success = "success",
    TimedOut = "timed_out",
    InProgress = "in_progress",
    Queued = "queued",
    Requested = "requested",
    Waiting = "waiting"
}
