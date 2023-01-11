import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImportationReportResponseProductMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeCount" })
  activeCount: number;

  @SpeakeasyMetadata({ data: "json, name=detectedCount" })
  detectedCount: number;

  @SpeakeasyMetadata({ data: "json, name=duplicatedCount" })
  duplicatedCount: number;

  @SpeakeasyMetadata({ data: "json, name=failedCount" })
  failedCount: number;
}
