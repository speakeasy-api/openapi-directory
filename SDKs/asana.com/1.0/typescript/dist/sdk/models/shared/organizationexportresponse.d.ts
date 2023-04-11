import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";
/**
 * The current state of the export.
 */
export declare enum OrganizationExportResponseStateEnum {
    Pending = "pending",
    Started = "started",
    Finished = "finished",
    Error = "error"
}
/**
 * An *organization_export* object represents a request to export the complete data of an Organization in JSON format.
 */
export declare class OrganizationExportResponse extends SpeakeasyBase {
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    /**
     * Download this URL to retreive the full export of the organization
     *
     * @remarks
     * in JSON format. It will be compressed in a gzip (.gz) container.
     *
     * *Note: May be null if the export is still in progress or
     * failed.  If present, this URL may only be valid for 1 hour from
     * the time of retrieval. You should avoid persisting this URL
     * somewhere and rather refresh on demand to ensure you do not keep
     * stale URLs.*
     */
    downloadUrl?: string;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    organization?: WorkspaceCompact;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The current state of the export.
     */
    state?: OrganizationExportResponseStateEnum;
}
