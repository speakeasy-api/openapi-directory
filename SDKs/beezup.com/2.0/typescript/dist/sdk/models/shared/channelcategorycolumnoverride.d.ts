import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelColumnConfiguration } from "./channelcolumnconfiguration";
export declare class ChannelCategoryColumnOverride extends SpeakeasyBase {
    channelColumnDescription?: string;
    channelColumnId?: string;
    channelColumnName?: string;
    configuration?: ChannelColumnConfiguration;
    restrictedValues?: Record<string, string>;
    showInMapping?: boolean;
}
