import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetSchemaSummary } from "./datasetschemasummary";
/**
 * Success
 */
export declare class ListSchemasResponse extends SpeakeasyBase {
    nextToken?: string;
    schemas?: DatasetSchemaSummary[];
}
