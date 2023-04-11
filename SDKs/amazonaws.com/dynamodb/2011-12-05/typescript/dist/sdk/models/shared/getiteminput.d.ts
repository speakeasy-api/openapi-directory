import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
export declare class GetItemInput extends SpeakeasyBase {
    /**
     * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
     */
    attributesToGet?: string[];
    /**
     * If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used.
     */
    consistentRead?: boolean;
    /**
     * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
     */
    key: Key;
    tableName: string;
}
