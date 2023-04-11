import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSyncEvent } from "./resourcesyncevent";
import { ResourceSyncStatusEnum } from "./resourcesyncstatusenum";
import { Revision } from "./revision";
/**
 * Detail data for a resource sync attempt activated by a push to a repository.
 */
export declare class ResourceSyncAttempt extends SpeakeasyBase {
    events: ResourceSyncEvent[];
    initialRevision: Revision;
    startedAt: Date;
    status: ResourceSyncStatusEnum;
    target: string;
    targetRevision: Revision;
}
