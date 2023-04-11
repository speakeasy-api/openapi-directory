import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The launch template to use. You must specify either the launch template ID or launch template name in the request, but not both.
 */
export declare class LaunchTemplateSpecification extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    version?: string;
}
