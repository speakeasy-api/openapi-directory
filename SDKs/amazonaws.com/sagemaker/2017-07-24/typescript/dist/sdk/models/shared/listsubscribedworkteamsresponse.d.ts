import { SpeakeasyBase } from "../../../internal/utils";
import { SubscribedWorkteam } from "./subscribedworkteam";
/**
 * Success
 */
export declare class ListSubscribedWorkteamsResponse extends SpeakeasyBase {
    nextToken?: string;
    subscribedWorkteams: SubscribedWorkteam[];
}
