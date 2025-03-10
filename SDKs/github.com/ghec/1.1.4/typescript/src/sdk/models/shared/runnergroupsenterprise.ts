/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response
 */
export class RunnerGroupsEnterprise extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allows_public_repositories" })
  allowsPublicRepositories: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "default" })
  default: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "restricted_to_workflows" })
  restrictedToWorkflows?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "runners_url" })
  runnersUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "selected_organizations_url" })
  selectedOrganizationsUrl?: string;

  /**
   * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "selected_workflows" })
  selectedWorkflows?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "visibility" })
  visibility: string;

  /**
   * If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "workflow_restrictions_read_only" })
  workflowRestrictionsReadOnly?: boolean;
}
