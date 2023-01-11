import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
export declare class AddressConfiguration extends SpeakeasyBase {
    bodyOverride?: string;
    channelType?: ChannelTypeEnum;
    context?: Record<string, string>;
    rawContent?: string;
    substitutions?: Record<string, string[]>;
    titleOverride?: string;
}
