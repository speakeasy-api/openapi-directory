import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the target resources of a specific type in your import template (for example, all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources of that type.
 */
export declare class ResourceIdentifierSummary extends SpeakeasyBase {
    logicalResourceIds?: string[];
    resourceIdentifiers?: string[];
    resourceType?: string;
}
