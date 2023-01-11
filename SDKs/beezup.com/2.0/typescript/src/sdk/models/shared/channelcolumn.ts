import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelColumnConfiguration } from "./channelcolumnconfiguration";



// ChannelColumn
/** 
 * The channel column
**/
export class ChannelColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelColumnDescription" })
  channelColumnDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=channelColumnId" })
  channelColumnId: string;

  @SpeakeasyMetadata({ data: "json, name=channelColumnName" })
  channelColumnName: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration: ChannelColumnConfiguration;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;

  @SpeakeasyMetadata({ data: "json, name=restrictedValues" })
  restrictedValues?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=showInMapping" })
  showInMapping: boolean;
}
