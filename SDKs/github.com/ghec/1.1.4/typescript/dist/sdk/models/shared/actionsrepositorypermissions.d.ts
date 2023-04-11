import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
/**
 * Response
 */
export declare class ActionsRepositoryPermissions extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions and reusable workflows that are allowed to run.
     */
    allowedActions?: AllowedActionsEnum;
    /**
     * Whether GitHub Actions is enabled on the repository.
     */
    enabled: boolean;
    /**
     * The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`.
     */
    selectedActionsUrl?: string;
}
