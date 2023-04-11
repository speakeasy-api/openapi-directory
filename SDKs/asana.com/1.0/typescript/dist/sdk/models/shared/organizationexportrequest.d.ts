import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An *organization_export* request starts a job to export the complete data of the given Organization.
 */
export declare class OrganizationExportRequest extends SpeakeasyBase {
    /**
     * Globally unique identifier for the workspace or organization.
     */
    organization?: string;
}
