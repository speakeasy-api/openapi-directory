import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
export declare class KeysAndAttributes extends SpeakeasyBase {
    /**
     * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
     */
    attributesToGet?: string[];
    /**
     * If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used.
     */
    consistentRead?: boolean;
    keys: Key[];
}
