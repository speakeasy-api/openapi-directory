import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { Key } from "./key";
export declare class ScanInput extends SpeakeasyBase {
    /**
     * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
     */
    attributesToGet?: string[];
    count?: boolean;
    exclusiveStartKey?: Key;
    limit?: number;
    scanFilter?: Record<string, Condition>;
    tableName: string;
}
