import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyLaunchTemplateResultLaunchTemplate
/** 
 * Information about the launch template.
**/
export class ModifyLaunchTemplateResultLaunchTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime?: Record<string, any>;

  @SpeakeasyMetadata()
  createdBy?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultVersionNumber?: Record<string, any>;

  @SpeakeasyMetadata()
  latestVersionNumber?: Record<string, any>;

  @SpeakeasyMetadata()
  launchTemplateId?: Record<string, any>;

  @SpeakeasyMetadata()
  launchTemplateName?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class ModifyLaunchTemplateResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplate?: ModifyLaunchTemplateResultLaunchTemplate;
}
