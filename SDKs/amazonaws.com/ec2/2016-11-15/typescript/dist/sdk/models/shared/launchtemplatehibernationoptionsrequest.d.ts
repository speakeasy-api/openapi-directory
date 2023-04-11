import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the instance is configured for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html">hibernation prerequisites</a>.
 */
export declare class LaunchTemplateHibernationOptionsRequest extends SpeakeasyBase {
    configured?: boolean;
}
