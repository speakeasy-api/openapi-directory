import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the launch template.
**/
export declare class CreateLaunchTemplateResultLaunchTemplate extends SpeakeasyBase {
    createTime?: Record<string, any>;
    createdBy?: Record<string, any>;
    defaultVersionNumber?: Record<string, any>;
    latestVersionNumber?: Record<string, any>;
    launchTemplateId?: Record<string, any>;
    launchTemplateName?: Record<string, any>;
    tags?: Record<string, any>;
}
/**
 * If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
**/
export declare class CreateLaunchTemplateResultWarning extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class CreateLaunchTemplateResult extends SpeakeasyBase {
    launchTemplate?: CreateLaunchTemplateResultLaunchTemplate;
    warning?: CreateLaunchTemplateResultWarning;
}
