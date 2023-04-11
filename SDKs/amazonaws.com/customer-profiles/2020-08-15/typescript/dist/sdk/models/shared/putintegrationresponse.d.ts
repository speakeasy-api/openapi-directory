import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class PutIntegrationResponse extends SpeakeasyBase {
    createdAt: Date;
    domainName: string;
    isUnstructured?: boolean;
    lastUpdatedAt: Date;
    objectTypeName?: string;
    objectTypeNames?: Record<string, string>;
    tags?: Record<string, string>;
    uri: string;
    workflowId?: string;
}
