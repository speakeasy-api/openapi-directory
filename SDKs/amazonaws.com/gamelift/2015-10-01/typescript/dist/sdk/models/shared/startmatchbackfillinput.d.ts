import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
export declare class StartMatchBackfillInput extends SpeakeasyBase {
    configurationName: string;
    gameSessionArn?: string;
    players: Player[];
    ticketId?: string;
}
