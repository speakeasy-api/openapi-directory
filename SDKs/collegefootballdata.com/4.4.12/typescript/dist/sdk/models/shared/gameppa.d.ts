import { SpeakeasyBase } from "../../../internal/utils";
export declare class GamePPADefense extends SpeakeasyBase {
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class GamePPAOffense extends SpeakeasyBase {
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class GamePPA extends SpeakeasyBase {
    conference?: string;
    defense?: GamePPADefense;
    gameId?: number;
    offense?: GamePPAOffense;
    opponent?: string;
    season?: number;
    team?: string;
    week?: number;
}
