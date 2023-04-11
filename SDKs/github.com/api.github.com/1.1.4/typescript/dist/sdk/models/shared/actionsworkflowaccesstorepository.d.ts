import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
 *
 * @remarks
 * repository.
 *
 * `none` means the access is only possible from workflows in this repository. `user` level access allows sharing across user owned private repos only. `organization` level access allows sharing across the organization.
 */
export declare enum ActionsWorkflowAccessToRepositoryAccessLevelEnum {
    None = "none",
    User = "user",
    Organization = "organization"
}
/**
 * Response
 */
export declare class ActionsWorkflowAccessToRepository extends SpeakeasyBase {
    /**
     * Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
     *
     * @remarks
     * repository.
     *
     * `none` means the access is only possible from workflows in this repository. `user` level access allows sharing across user owned private repos only. `organization` level access allows sharing across the organization.
     */
    accessLevel: ActionsWorkflowAccessToRepositoryAccessLevelEnum;
}
