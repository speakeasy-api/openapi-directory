import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class ModifyLaunchTemplateResultLaunchTemplateTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the launch template.
 */
export declare class ModifyLaunchTemplateResultLaunchTemplate extends SpeakeasyBase {
    createTime?: Date;
    createdBy?: string;
    defaultVersionNumber?: number;
    latestVersionNumber?: number;
    launchTemplateId?: string;
    launchTemplateName?: string;
    tags?: ModifyLaunchTemplateResultLaunchTemplateTags[];
}
/**
 * Success
 */
export declare class ModifyLaunchTemplateResult extends SpeakeasyBase {
    launchTemplate?: ModifyLaunchTemplateResultLaunchTemplate;
}
