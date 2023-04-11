import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Repository invitations let you manage who you collaborate with.
 */
export declare class RepositorySubscription extends SpeakeasyBase {
    createdAt: Date;
    /**
     * Determines if all notifications should be blocked from this repository.
     */
    ignored: boolean;
    reason: string;
    repositoryUrl: string;
    /**
     * Determines if notifications should be received from this repository.
     */
    subscribed: boolean;
    url: string;
}
