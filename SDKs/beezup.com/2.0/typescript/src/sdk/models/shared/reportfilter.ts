import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterLinks } from "./reportfilterlinks";
import { ReportFilterParameters } from "./reportfilterparameters";



export class ReportFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ReportFilterLinks;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: ReportFilterParameters;

  @SpeakeasyMetadata({ data: "json, name=reportFilterId" })
  reportFilterId: string;

  @SpeakeasyMetadata({ data: "json, name=reportFilterName" })
  reportFilterName: string;
}
