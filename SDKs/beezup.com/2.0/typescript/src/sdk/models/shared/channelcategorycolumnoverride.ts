import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelColumnConfiguration } from "./channelcolumnconfiguration";



export class ChannelCategoryColumnOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelColumnDescription" })
  channelColumnDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=channelColumnId" })
  channelColumnId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelColumnName" })
  channelColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ChannelColumnConfiguration;

  @SpeakeasyMetadata({ data: "json, name=restrictedValues" })
  restrictedValues?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=showInMapping" })
  showInMapping?: boolean;
}
