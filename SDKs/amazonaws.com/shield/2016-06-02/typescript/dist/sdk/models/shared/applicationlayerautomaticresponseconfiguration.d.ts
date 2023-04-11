import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationLayerAutomaticResponseStatusEnum } from "./applicationlayerautomaticresponsestatusenum";
import { ResponseAction } from "./responseaction";
/**
 * The automatic application layer DDoS mitigation settings for a <a>Protection</a>. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
 */
export declare class ApplicationLayerAutomaticResponseConfiguration extends SpeakeasyBase {
    action: ResponseAction;
    status: ApplicationLayerAutomaticResponseStatusEnum;
}
