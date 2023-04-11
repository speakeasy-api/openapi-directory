import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An integration in list of integrations.
 */
export declare class ListIntegrationItem extends SpeakeasyBase {
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
