import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceConnectionStatus } from "./workspaceconnectionstatus";
/**
 * Success
 */
export declare class DescribeWorkspacesConnectionStatusResult extends SpeakeasyBase {
    nextToken?: string;
    workspacesConnectionStatus?: WorkspaceConnectionStatus[];
}
