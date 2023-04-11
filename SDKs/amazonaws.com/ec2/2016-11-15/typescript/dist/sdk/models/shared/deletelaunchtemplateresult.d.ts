import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DeleteLaunchTemplateResultLaunchTemplateTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the launch template.
 */
export declare class DeleteLaunchTemplateResultLaunchTemplate extends SpeakeasyBase {
    createTime?: Date;
    createdBy?: string;
    defaultVersionNumber?: number;
    latestVersionNumber?: number;
    launchTemplateId?: string;
    launchTemplateName?: string;
    tags?: DeleteLaunchTemplateResultLaunchTemplateTags[];
}
/**
 * Success
 */
export declare class DeleteLaunchTemplateResult extends SpeakeasyBase {
    launchTemplate?: DeleteLaunchTemplateResultLaunchTemplate;
}
