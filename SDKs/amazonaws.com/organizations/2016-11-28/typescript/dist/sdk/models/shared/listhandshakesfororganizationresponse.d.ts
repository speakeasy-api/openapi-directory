import { SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";
/**
 * Success
 */
export declare class ListHandshakesForOrganizationResponse extends SpeakeasyBase {
    handshakes?: Handshake[];
    nextToken?: string;
}
