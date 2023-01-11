import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelColumnConfiguration } from "./channelcolumnconfiguration";
/**
 * The channel column
**/
export declare class ChannelColumn extends SpeakeasyBase {
    channelColumnDescription?: string;
    channelColumnId: string;
    channelColumnName: string;
    configuration: ChannelColumnConfiguration;
    position: number;
    restrictedValues?: Record<string, string>;
    showInMapping: boolean;
}
