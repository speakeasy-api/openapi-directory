import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderInvoiceDesignSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=footerContentHtml" })
  footerContentHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=headerContentHtml" })
  headerContentHtml?: string;
}
