import { SpeakeasyBase } from "../../../internal/utils";
import { FilterConfiguration } from "./filterconfiguration";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";
/**
 * Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution.
 */
export declare class GameSessionQueue extends SpeakeasyBase {
    customEventData?: string;
    destinations?: GameSessionQueueDestination[];
    filterConfiguration?: FilterConfiguration;
    gameSessionQueueArn?: string;
    name?: string;
    notificationTarget?: string;
    playerLatencyPolicies?: PlayerLatencyPolicy[];
    priorityConfiguration?: PriorityConfiguration;
    timeoutInSeconds?: number;
}
