import { SpeakeasyBase } from "../../../internal/utils";
import { ActionsDefaultWorkflowPermissionsEnum } from "./actionsdefaultworkflowpermissionsenum";
export declare class ActionsSetDefaultWorkflowPermissions extends SpeakeasyBase {
    /**
     * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
     */
    canApprovePullRequestReviews?: boolean;
    /**
     * The default workflow permissions granted to the GITHUB_TOKEN when running workflows.
     */
    defaultWorkflowPermissions?: ActionsDefaultWorkflowPermissionsEnum;
}
