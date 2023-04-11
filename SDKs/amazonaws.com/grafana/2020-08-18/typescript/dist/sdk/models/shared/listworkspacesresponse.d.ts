import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceSummary } from "./workspacesummary";
/**
 * Success
 */
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    nextToken?: string;
    workspaces: WorkspaceSummary[];
}
