import { SpeakeasyBase } from "../../../internal/utils";
import { IssueComment } from "./issuecomment";
import { IssueSimple } from "./issuesimple";
import { Actor } from "./actor";
export declare class EventPayloadPages extends SpeakeasyBase {
    action?: string;
    htmlUrl?: string;
    pageName?: string;
    sha?: string;
    summary?: string;
    title?: string;
}
export declare class EventPayload extends SpeakeasyBase {
    action: string;
    comment?: IssueComment;
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
**/
export declare class Event extends SpeakeasyBase {
    actor: Actor;
    createdAt: Date;
    id: string;
    org?: Actor;
    payload: EventPayload;
    public: boolean;
    repo: EventRepo;
    type: string;
}
