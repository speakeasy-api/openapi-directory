/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * The launch template to use. You must specify either the launch template ID or launch template name in the request, but not both.
 */
export class LaunchTemplateSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateId?: string;

  @SpeakeasyMetadata()
  launchTemplateName?: string;

  @SpeakeasyMetadata()
  version?: string;
}
