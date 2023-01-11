import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";
export declare enum OrganizationExportResponseStateEnum {
    Pending = "pending",
    Started = "started",
    Finished = "finished",
    Error = "error"
}
/**
 * An *organization_export* object represents a request to export the complete data of an Organization in JSON format.
**/
export declare class OrganizationExportResponse extends SpeakeasyBase {
    createdAt?: Date;
    downloadUrl?: string;
    gid?: string;
    organization?: WorkspaceCompact;
    resourceType?: string;
    state?: OrganizationExportResponseStateEnum;
}
