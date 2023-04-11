import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroup } from "./gameservergroup";
/**
 * Success
 */
export declare class ListGameServerGroupsOutput extends SpeakeasyBase {
    gameServerGroups?: GameServerGroup[];
    nextToken?: string;
}
