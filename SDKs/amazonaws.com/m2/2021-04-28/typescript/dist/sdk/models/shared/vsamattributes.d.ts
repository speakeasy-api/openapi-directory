import { SpeakeasyBase } from "../../../internal/utils";
import { AlternateKey } from "./alternatekey";
import { PrimaryKey } from "./primarykey";
/**
 * The attributes of a VSAM type data set.
 */
export declare class VsamAttributes extends SpeakeasyBase {
    alternateKeys?: AlternateKey[];
    compressed?: boolean;
    encoding?: string;
    format: string;
    primaryKey?: PrimaryKey;
}
