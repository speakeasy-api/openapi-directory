import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { SingleMasterConfiguration } from "./singlemasterconfiguration";
import { StatusEnum } from "./statusenum";
/**
 * A structure that encapsulates a signaling channel's metadata and properties.
 */
export declare class ChannelInfo extends SpeakeasyBase {
    channelARN?: string;
    channelName?: string;
    channelStatus?: StatusEnum;
    channelType?: ChannelTypeEnum;
    creationTime?: Date;
    singleMasterConfiguration?: SingleMasterConfiguration;
    version?: string;
}
