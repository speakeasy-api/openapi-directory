import { SpeakeasyBase } from "../../../internal/utils";
import { PreferredProtocolEnum } from "./preferredprotocolenum";
/**
 * The streaming protocol you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
 */
export declare class StreamingExperienceSettings extends SpeakeasyBase {
    preferredProtocol?: PreferredProtocolEnum;
}
