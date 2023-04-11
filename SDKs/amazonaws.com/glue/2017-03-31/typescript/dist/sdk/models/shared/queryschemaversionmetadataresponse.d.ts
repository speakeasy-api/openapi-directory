import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataInfo } from "./metadatainfo";
/**
 * Success
 */
export declare class QuerySchemaVersionMetadataResponse extends SpeakeasyBase {
    metadataInfoMap?: Record<string, MetadataInfo>;
    nextToken?: string;
    schemaVersionId?: string;
}
