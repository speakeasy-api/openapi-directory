import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByCategory } from "./reportbycategory";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



export class ReportByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: ReportByCategory })
  categories?: ReportByCategory[];

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ReportByCommonResponseLinks;

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult?: BeezUpCommonPaginationResult;
}
