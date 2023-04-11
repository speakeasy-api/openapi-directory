import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamPPADefenseCumulative extends SpeakeasyBase {
    passing?: number;
    rushing?: number;
    total?: number;
}
export declare class TeamPPADefense extends SpeakeasyBase {
    cumulative?: TeamPPADefenseCumulative;
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class TeamPPAOffenseCumulative extends SpeakeasyBase {
    passing?: number;
    rushing?: number;
    total?: number;
}
export declare class TeamPPAOffense extends SpeakeasyBase {
    cumulative?: TeamPPAOffenseCumulative;
    firstDown?: number;
    overall?: number;
    passing?: number;
    rushing?: number;
    secondDown?: number;
    thirdDown?: number;
}
export declare class TeamPPA extends SpeakeasyBase {
    conference?: string;
    defense?: TeamPPADefense;
    offense?: TeamPPAOffense;
    season?: number;
    team?: string;
}
