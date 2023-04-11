import { SpeakeasyBase } from "../../../internal/utils";
import { AlternateKey } from "./alternatekey";
import { PrimaryKey } from "./primarykey";
/**
 * The attributes of a VSAM type data set.
 */
export declare class VsamDetailAttributes extends SpeakeasyBase {
    alternateKeys?: AlternateKey[];
    cacheAtStartup?: boolean;
    compressed?: boolean;
    encoding?: string;
    primaryKey?: PrimaryKey;
    recordFormat?: string;
}
