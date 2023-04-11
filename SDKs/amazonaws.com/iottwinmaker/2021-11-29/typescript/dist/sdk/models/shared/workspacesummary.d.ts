import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about a workspace.
 */
export declare class WorkspaceSummary extends SpeakeasyBase {
    arn: string;
    creationDateTime: Date;
    description?: string;
    updateDateTime: Date;
    workspaceId: string;
}
