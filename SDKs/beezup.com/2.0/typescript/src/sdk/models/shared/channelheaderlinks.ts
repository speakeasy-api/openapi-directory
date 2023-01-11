import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetChannelInfoLink } from "./linksgetchannelinfolink";



// ChannelHeaderLinks
/** 
 * The links related to an available channel
**/
export class ChannelHeaderLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetChannelInfoLink;
}
