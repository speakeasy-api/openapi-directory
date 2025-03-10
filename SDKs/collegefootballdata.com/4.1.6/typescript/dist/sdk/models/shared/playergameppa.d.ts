import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlayerGamePpaAveragePpa extends SpeakeasyBase {
    all?: number;
    pass?: number;
    rush?: number;
}
export declare class PlayerGamePpa extends SpeakeasyBase {
    averagePPA?: PlayerGamePpaAveragePpa;
    name?: string;
    opponent?: string;
    position?: string;
    season?: number;
    team?: string;
    week?: number;
}
