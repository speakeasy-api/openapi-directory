import { SpeakeasyBase } from "../../../internal/utils";
import { AccessControlListConfiguration } from "./accesscontrollistconfiguration";
import { DocumentsMetadataConfiguration } from "./documentsmetadataconfiguration";
/**
 * Provides the configuration information to connect to an Amazon S3 bucket.
 */
export declare class S3DataSourceConfiguration extends SpeakeasyBase {
    accessControlListConfiguration?: AccessControlListConfiguration;
    bucketName: string;
    /**
     * Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.
     */
    documentsMetadataConfiguration?: DocumentsMetadataConfiguration;
    exclusionPatterns?: string[];
    inclusionPatterns?: string[];
    inclusionPrefixes?: string[];
}
