import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
export declare class StartMatchmakingInput extends SpeakeasyBase {
    configurationName: string;
    players: Player[];
    ticketId?: string;
}
