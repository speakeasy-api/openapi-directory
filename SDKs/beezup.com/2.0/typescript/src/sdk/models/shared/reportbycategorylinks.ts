import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksOptimiseByCategoryLink } from "./linksoptimisebycategorylink";



export class ReportByCategoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableProducts" })
  disableProducts?: LinksOptimiseByCategoryLink;

  @SpeakeasyMetadata({ data: "json, name=enableProducts" })
  enableProducts?: LinksOptimiseByCategoryLink;
}
