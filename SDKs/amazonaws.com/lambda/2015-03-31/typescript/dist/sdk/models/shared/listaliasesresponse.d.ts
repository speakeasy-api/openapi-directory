import { SpeakeasyBase } from "../../../internal/utils";
import { AliasConfiguration } from "./aliasconfiguration";
/**
 * Success
 */
export declare class ListAliasesResponse extends SpeakeasyBase {
    aliases?: AliasConfiguration[];
    nextMarker?: string;
}
