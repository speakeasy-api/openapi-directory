import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Apply filters
 */
export declare class IssuesFilter extends SpeakeasyBase {
    /**
     * Only return tickets assigned to a specific user
     */
    assigneeId?: string;
    /**
     * Only return tickets since a specific date
     */
    since?: Date;
    /**
     * Filter by ticket status, can be `open`, `closed` or `all`. Will passthrough if none of the above match
     */
    status?: string[];
}
