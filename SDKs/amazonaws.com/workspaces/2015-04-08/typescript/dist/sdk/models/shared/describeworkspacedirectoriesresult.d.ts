import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceDirectory } from "./workspacedirectory";
/**
 * Success
 */
export declare class DescribeWorkspaceDirectoriesResult extends SpeakeasyBase {
    directories?: WorkspaceDirectory[];
    nextToken?: string;
}
