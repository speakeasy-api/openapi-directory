import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemIdentity } from "./opsitemidentity";
/**
 * Summary information about related-item resources for an OpsItem.
 */
export declare class OpsItemRelatedItemSummary extends SpeakeasyBase {
    associationId?: string;
    associationType?: string;
    /**
     * Information about the user or resource that created an OpsItem event.
     */
    createdBy?: OpsItemIdentity;
    createdTime?: Date;
    /**
     * Information about the user or resource that created an OpsItem event.
     */
    lastModifiedBy?: OpsItemIdentity;
    lastModifiedTime?: Date;
    opsItemId?: string;
    resourceType?: string;
    resourceUri?: string;
}
