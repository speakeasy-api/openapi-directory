import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByProductAllChannelsLinks } from "./reportbyproductallchannelslinks";
import { ReportByProductOneChannelLinks } from "./reportbyproductonechannellinks";



// ReportByProductLinks
/** 
 * Depending if the report concerned multiple channels or one channel.
**/
export class ReportByProductLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allChannelsLinks" })
  allChannelsLinks?: ReportByProductAllChannelsLinks;

  @SpeakeasyMetadata({ data: "json, name=oneChannelLinks" })
  oneChannelLinks?: ReportByProductOneChannelLinks;
}
