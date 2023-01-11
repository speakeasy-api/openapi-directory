import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the launch template.
**/
export declare class DeleteLaunchTemplateResultLaunchTemplate extends SpeakeasyBase {
    createTime?: Record<string, any>;
    createdBy?: Record<string, any>;
    defaultVersionNumber?: Record<string, any>;
    latestVersionNumber?: Record<string, any>;
    launchTemplateId?: Record<string, any>;
    launchTemplateName?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class DeleteLaunchTemplateResult extends SpeakeasyBase {
    launchTemplate?: DeleteLaunchTemplateResultLaunchTemplate;
}
