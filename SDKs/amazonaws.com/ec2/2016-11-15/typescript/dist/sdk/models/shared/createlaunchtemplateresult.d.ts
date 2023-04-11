import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateLaunchTemplateResultLaunchTemplateTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the launch template.
 */
export declare class CreateLaunchTemplateResultLaunchTemplate extends SpeakeasyBase {
    createTime?: Date;
    createdBy?: string;
    defaultVersionNumber?: number;
    latestVersionNumber?: number;
    launchTemplateId?: string;
    launchTemplateName?: string;
    tags?: CreateLaunchTemplateResultLaunchTemplateTags[];
}
/**
 * The error code and error message that is returned for a parameter or parameter combination that is not valid when a new launch template or new version of a launch template is created.
 */
export declare class CreateLaunchTemplateResultWarningErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
 */
export declare class CreateLaunchTemplateResultWarning extends SpeakeasyBase {
    errors?: CreateLaunchTemplateResultWarningErrors[];
}
/**
 * Success
 */
export declare class CreateLaunchTemplateResult extends SpeakeasyBase {
    launchTemplate?: CreateLaunchTemplateResultLaunchTemplate;
    warning?: CreateLaunchTemplateResultWarning;
}
