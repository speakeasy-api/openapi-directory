import { SpeakeasyBase } from "../../../internal/utils";
import { FilterConfiguration } from "./filterconfiguration";
import { GameSessionQueueDestination } from "./gamesessionqueuedestination";
import { PlayerLatencyPolicy } from "./playerlatencypolicy";
import { PriorityConfiguration } from "./priorityconfiguration";
import { Tag } from "./tag";
export declare class CreateGameSessionQueueInput extends SpeakeasyBase {
    customEventData?: string;
    destinations?: GameSessionQueueDestination[];
    filterConfiguration?: FilterConfiguration;
    name: string;
    notificationTarget?: string;
    playerLatencyPolicies?: PlayerLatencyPolicy[];
    priorityConfiguration?: PriorityConfiguration;
    tags?: Tag[];
    timeoutInSeconds?: number;
}
