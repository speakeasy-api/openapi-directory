import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksOptimiseAllLink } from "./linksoptimisealllink";
import { LinksOptimiseLink } from "./linksoptimiselink";



export class ReportByCommonResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableAllProducts" })
  disableAllProducts?: LinksOptimiseAllLink;

  @SpeakeasyMetadata({ data: "json, name=disableProducts" })
  disableProducts?: LinksOptimiseLink;

  @SpeakeasyMetadata({ data: "json, name=enableAllProducts" })
  enableAllProducts?: LinksOptimiseAllLink;

  @SpeakeasyMetadata({ data: "json, name=enableProducts" })
  enableProducts?: LinksOptimiseLink;
}
