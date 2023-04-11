import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaSummary } from "./schemasummary";
/**
 * Success
 */
export declare class ListSchemasOutput extends SpeakeasyBase {
    nextToken?: string;
    schemaSummaries: SchemaSummary[];
}
