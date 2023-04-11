import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the target resource of an import operation.
 */
export declare class ResourceToImport extends SpeakeasyBase {
    logicalResourceId: string;
    resourceIdentifier: Record<string, string>;
    resourceType: string;
}
