import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksOptimiseByChannelLink } from "./linksoptimisebychannellink";



export class ReportByChannelLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableProducts" })
  disableProducts?: LinksOptimiseByChannelLink;

  @SpeakeasyMetadata({ data: "json, name=enableProducts" })
  enableProducts?: LinksOptimiseByChannelLink;
}
