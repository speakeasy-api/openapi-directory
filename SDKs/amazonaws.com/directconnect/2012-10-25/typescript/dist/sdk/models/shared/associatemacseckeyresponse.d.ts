import { SpeakeasyBase } from "../../../internal/utils";
import { MacSecKey } from "./macseckey";
/**
 * Success
 */
export declare class AssociateMacSecKeyResponse extends SpeakeasyBase {
    connectionId?: string;
    macSecKeys?: MacSecKey[];
}
