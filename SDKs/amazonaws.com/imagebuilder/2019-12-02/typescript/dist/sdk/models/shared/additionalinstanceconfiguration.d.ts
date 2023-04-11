import { SpeakeasyBase } from "../../../internal/utils";
import { SystemsManagerAgent } from "./systemsmanageragent";
/**
 * <p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p>
 */
export declare class AdditionalInstanceConfiguration extends SpeakeasyBase {
    systemsManagerAgent?: SystemsManagerAgent;
    userDataOverride?: string;
}
