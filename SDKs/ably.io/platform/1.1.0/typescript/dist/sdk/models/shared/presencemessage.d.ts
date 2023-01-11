import { SpeakeasyBase } from "../../../internal/utils";
import { Extras } from "./extras";
export declare enum PresenceMessageActionEnum {
    Absent = "ABSENT",
    Present = "PRESENT",
    Enter = "ENTER",
    Leave = "LEAVE",
    Update = "UPDATE"
}
export declare class PresenceMessage extends SpeakeasyBase {
    action?: PresenceMessageActionEnum;
    clientId?: string;
    connectionId?: string;
    data?: string;
    encoding?: string;
    extras?: Extras;
    id?: string;
    timestamp?: number;
}
