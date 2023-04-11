import { SpeakeasyBase } from "../../../internal/utils";
import { MacSecKey } from "./macseckey";
/**
 * Success
 */
export declare class DisassociateMacSecKeyResponse extends SpeakeasyBase {
    connectionId?: string;
    macSecKeys?: MacSecKey[];
}
