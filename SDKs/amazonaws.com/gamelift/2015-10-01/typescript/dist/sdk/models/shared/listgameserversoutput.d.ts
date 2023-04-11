import { SpeakeasyBase } from "../../../internal/utils";
import { GameServer } from "./gameserver";
/**
 * Success
 */
export declare class ListGameServersOutput extends SpeakeasyBase {
    gameServers?: GameServer[];
    nextToken?: string;
}
