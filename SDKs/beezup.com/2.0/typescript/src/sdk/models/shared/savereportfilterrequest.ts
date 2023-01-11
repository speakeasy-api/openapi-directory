import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFilterParameters } from "./reportfilterparameters";



export class SaveReportFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: ReportFilterParameters;

  @SpeakeasyMetadata({ data: "json, name=reportFilterName" })
  reportFilterName: string;
}
