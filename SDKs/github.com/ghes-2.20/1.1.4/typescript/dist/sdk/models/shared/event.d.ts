import { SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { IssueComment } from "./issuecomment";
import { IssueSimple } from "./issuesimple";
export declare class EventPayloadPages extends SpeakeasyBase {
    action?: string;
    htmlUrl?: string;
    pageName?: string;
    sha?: string;
    summary?: string;
    title?: string;
}
export declare class EventPayload extends SpeakeasyBase {
    action?: string;
    /**
     * Comments provide a way for people to collaborate on an issue.
     */
    comment?: IssueComment;
    /**
     * Issue Simple
     */
    issue?: IssueSimple;
    pages?: EventPayloadPages[];
}
export declare class EventRepo extends SpeakeasyBase {
    id: number;
    name: string;
    url: string;
}
/**
 * Event
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Actor
     */
    actor: Actor;
    createdAt: Date;
    id: string;
    /**
     * Actor
     */
    org?: Actor;
    payload: EventPayload;
    public: boolean;
    repo: EventRepo;
    type: string;
}
