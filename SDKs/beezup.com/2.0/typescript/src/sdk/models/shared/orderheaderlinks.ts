import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetOrderLink } from "./linksgetorderlink";



export class OrderHeaderLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetOrderLink;
}
