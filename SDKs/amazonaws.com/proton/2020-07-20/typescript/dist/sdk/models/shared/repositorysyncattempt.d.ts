import { SpeakeasyBase } from "../../../internal/utils";
import { RepositorySyncEvent } from "./repositorysyncevent";
import { RepositorySyncStatusEnum } from "./repositorysyncstatusenum";
/**
 * Detail data for a repository sync attempt activated by a push to a repository.
 */
export declare class RepositorySyncAttempt extends SpeakeasyBase {
    events: RepositorySyncEvent[];
    startedAt: Date;
    status: RepositorySyncStatusEnum;
}
