import { SpeakeasyBase } from "../../../internal/utils";
import { Issue } from "./issue";
import { SimpleUser } from "./simpleuser";
export declare class TimelineCrossReferencedEventSource extends SpeakeasyBase {
    /**
     * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
     */
    issue?: Issue;
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
