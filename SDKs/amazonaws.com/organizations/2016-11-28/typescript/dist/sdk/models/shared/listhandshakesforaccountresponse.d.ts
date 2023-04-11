import { SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";
/**
 * Success
 */
export declare class ListHandshakesForAccountResponse extends SpeakeasyBase {
    handshakes?: Handshake[];
    nextToken?: string;
}
