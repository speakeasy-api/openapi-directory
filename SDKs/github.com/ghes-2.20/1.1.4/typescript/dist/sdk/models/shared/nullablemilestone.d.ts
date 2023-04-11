import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * The state of the milestone.
 */
export declare enum NullableMilestoneStateEnum {
    Open = "open",
    Closed = "closed"
}
/**
 * A collection of related issues and pull requests.
 */
export declare class NullableMilestone extends SpeakeasyBase {
    closedAt: Date;
    closedIssues: number;
    createdAt: Date;
    /**
     * Simple User
     */
    creator: NullableSimpleUser;
    description: string;
    dueOn: Date;
    htmlUrl: string;
    id: number;
    labelsUrl: string;
    nodeId: string;
    /**
     * The number of the milestone.
     */
    number: number;
    openIssues: number;
    /**
     * The state of the milestone.
     */
    state: NullableMilestoneStateEnum;
    /**
     * The title of the milestone.
     */
    title: string;
    updatedAt: Date;
    url: string;
}
