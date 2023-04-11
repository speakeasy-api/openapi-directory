import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceBundle } from "./workspacebundle";
/**
 * Success
 */
export declare class DescribeWorkspaceBundlesResult extends SpeakeasyBase {
    bundles?: WorkspaceBundle[];
    nextToken?: string;
}
