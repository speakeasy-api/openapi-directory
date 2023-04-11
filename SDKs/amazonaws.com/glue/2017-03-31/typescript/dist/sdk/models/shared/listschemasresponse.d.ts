import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaListItem } from "./schemalistitem";
/**
 * Success
 */
export declare class ListSchemasResponse extends SpeakeasyBase {
    nextToken?: string;
    schemas?: SchemaListItem[];
}
