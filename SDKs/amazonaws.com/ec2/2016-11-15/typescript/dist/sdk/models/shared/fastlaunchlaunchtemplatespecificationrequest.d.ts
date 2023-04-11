import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Request to create a launch template for a fast-launch enabled Windows AMI.</p> <note> <p>Note - You can specify either the <code>LaunchTemplateName</code> or the <code>LaunchTemplateId</code>, but not both.</p> </note>
 */
export declare class FastLaunchLaunchTemplateSpecificationRequest extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    version: string;
}
