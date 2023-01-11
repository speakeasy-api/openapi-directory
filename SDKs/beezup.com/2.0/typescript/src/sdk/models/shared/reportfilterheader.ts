import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterHeaderLinks } from "./reportfilterheaderlinks";
import { ReportTypeEnum } from "./reporttypeenum";



export class ReportFilterHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ReportFilterHeaderLinks;

  @SpeakeasyMetadata({ data: "json, name=reportFilterId" })
  reportFilterId: string;

  @SpeakeasyMetadata({ data: "json, name=reportFilterName" })
  reportFilterName: string;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType: ReportTypeEnum;
}
