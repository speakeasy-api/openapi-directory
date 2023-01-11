import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFiltersLinks } from "./reportfilterslinks";
import { ReportFilterHeader } from "./reportfilterheader";



export class ReportFilterList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ReportFiltersLinks;

  @SpeakeasyMetadata({ data: "json, name=reportFilters", elemType: ReportFilterHeader })
  reportFilters: ReportFilterHeader[];
}
