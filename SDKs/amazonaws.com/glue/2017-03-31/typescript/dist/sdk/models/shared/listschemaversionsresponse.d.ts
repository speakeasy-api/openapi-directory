import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionListItem } from "./schemaversionlistitem";
/**
 * Success
 */
export declare class ListSchemaVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    schemas?: SchemaVersionListItem[];
}
