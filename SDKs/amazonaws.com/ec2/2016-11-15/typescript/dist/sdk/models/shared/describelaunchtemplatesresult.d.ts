import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeLaunchTemplatesResultLaunchTemplatesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a launch template.
 */
export declare class DescribeLaunchTemplatesResultLaunchTemplates extends SpeakeasyBase {
    createTime?: Date;
    createdBy?: string;
    defaultVersionNumber?: number;
    latestVersionNumber?: number;
    launchTemplateId?: string;
    launchTemplateName?: string;
    tags?: DescribeLaunchTemplatesResultLaunchTemplatesTags[];
}
/**
 * Success
 */
export declare class DescribeLaunchTemplatesResult extends SpeakeasyBase {
    launchTemplates?: DescribeLaunchTemplatesResultLaunchTemplates[];
    nextToken?: string;
}
