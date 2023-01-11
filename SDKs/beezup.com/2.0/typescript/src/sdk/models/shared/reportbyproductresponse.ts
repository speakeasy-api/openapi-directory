import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ReportByProduct } from "./reportbyproduct";



export class ReportByProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ReportByCommonResponseLinks;

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult: BeezUpCommonPaginationResult;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: ReportByProduct })
  products: ReportByProduct[];
}
