import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlayerGamePPAAveragePPA extends SpeakeasyBase {
    all?: number;
    pass?: number;
    rush?: number;
}
export declare class PlayerGamePPA extends SpeakeasyBase {
    averagePPA?: PlayerGamePPAAveragePPA;
    name?: string;
    opponent?: string;
    position?: string;
    season?: number;
    team?: string;
    week?: number;
}
