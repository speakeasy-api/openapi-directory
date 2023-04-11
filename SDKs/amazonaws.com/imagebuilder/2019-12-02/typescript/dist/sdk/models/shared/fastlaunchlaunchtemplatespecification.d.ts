import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Identifies the launch template that the associated Windows AMI uses for launching an instance when faster launching is enabled.</p> <note> <p>You can specify either the <code>launchTemplateName</code> or the <code>launchTemplateId</code>, but not both.</p> </note>
 */
export declare class FastLaunchLaunchTemplateSpecification extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    launchTemplateVersion?: string;
}
