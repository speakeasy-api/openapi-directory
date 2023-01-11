import { SpeakeasyBase } from "../../../internal/utils";
import { Extras } from "./extras";
/**
 * Message object.
**/
export declare class Message extends SpeakeasyBase {
    clientId?: string;
    connectionId?: string;
    data?: string;
    encoding?: string;
    extras?: Extras;
    id?: string;
    name?: string;
    timestamp?: number;
}
/**
 * Message object.
**/
export declare class MessageInput extends SpeakeasyBase {
    clientId?: string;
    connectionId?: string;
    data?: string;
    encoding?: string;
    extras?: Extras;
    name?: string;
}
