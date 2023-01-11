import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksOptimiseByProductLink } from "./linksoptimisebyproductlink";



export class ReportByProductAllChannelsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableProductForAllChannels" })
  disableProductForAllChannels: LinksOptimiseByProductLink;

  @SpeakeasyMetadata({ data: "json, name=enableProductForAllChannels" })
  enableProductForAllChannels: LinksOptimiseByProductLink;
}
