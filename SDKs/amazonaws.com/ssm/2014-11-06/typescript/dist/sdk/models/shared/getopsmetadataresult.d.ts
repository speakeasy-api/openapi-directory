import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataValue } from "./metadatavalue";
/**
 * Success
 */
export declare class GetOpsMetadataResult extends SpeakeasyBase {
    metadata?: Record<string, MetadataValue>;
    nextToken?: string;
    resourceId?: string;
}
