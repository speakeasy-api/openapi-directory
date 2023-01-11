import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputFileConfiguration } from "./inputfileconfiguration";



export class GetImportationReportResponseImportationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beginUtcDate" })
  beginUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=endUtcDate" })
  endUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=inputConfiguration" })
  inputConfiguration: InputFileConfiguration;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}
