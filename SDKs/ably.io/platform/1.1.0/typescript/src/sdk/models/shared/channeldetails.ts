import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelStatus } from "./channelstatus";



export class ChannelDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "json, name=isGlobalMaster" })
  isGlobalMaster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChannelStatus;
}
