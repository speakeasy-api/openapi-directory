import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLaunchTemplateResultLaunchTemplate
/** 
 * Information about the launch template.
**/
export class CreateLaunchTemplateResultLaunchTemplate extends SpeakeasyBase {
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


// CreateLaunchTemplateResultWarning
/** 
 * If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
**/
export class CreateLaunchTemplateResultWarning extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errors?: Record<string, any>;
}


export class CreateLaunchTemplateResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplate?: CreateLaunchTemplateResultLaunchTemplate;

  @SpeakeasyMetadata()
  warning?: CreateLaunchTemplateResultWarning;
}
