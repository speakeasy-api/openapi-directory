import { SpeakeasyBase } from "../../../internal/utils";
import { IssueSimple } from "./issuesimple";
import { SimpleUser } from "./simpleuser";
export declare class TimelineCrossReferencedEventSource extends SpeakeasyBase {
    /**
     * Issue Simple
     */
    issue?: IssueSimple;
    type?: string;
}
/**
 * Timeline Cross Referenced Event
 */
export declare class TimelineCrossReferencedEvent extends SpeakeasyBase {
    /**
     * Simple User
     */
    actor?: SimpleUser;
    createdAt: Date;
    event: string;
    source: TimelineCrossReferencedEventSource;
    updatedAt: Date;
}
