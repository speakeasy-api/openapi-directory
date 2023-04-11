import { SpeakeasyBase } from "../../../internal/utils";
import { Workspace } from "./workspace";
/**
 * Success
 */
export declare class DescribeWorkspacesResult extends SpeakeasyBase {
    nextToken?: string;
    workspaces?: Workspace[];
}
