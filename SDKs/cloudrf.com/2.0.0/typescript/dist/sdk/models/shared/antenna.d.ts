import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AntennaPolEnum {
    H = "h",
    V = "v"
}
export declare class Antenna extends SpeakeasyBase {
    ant?: number;
    azi?: number;
    hbw?: number;
    pol?: AntennaPolEnum;
    tlt?: number;
    txg?: number;
    txl?: number;
    vbw?: number;
}
