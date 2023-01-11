import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetOrderExportationsLink } from "./linksgetorderexportationslink";



export class OrderExportationsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetOrderExportationsLink;
}
