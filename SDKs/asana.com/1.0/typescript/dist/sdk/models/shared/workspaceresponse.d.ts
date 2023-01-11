import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export declare class WorkspaceResponse extends SpeakeasyBase {
    emailDomains?: string[];
    gid?: string;
    isOrganization?: boolean;
    name?: string;
    resourceType?: string;
}
