import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImportationReportResponseDiff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdCount" })
  createdCount: number;

  @SpeakeasyMetadata({ data: "json, name=deletedCount" })
  deletedCount: number;

  @SpeakeasyMetadata({ data: "json, name=unchangedCount" })
  unchangedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedCount" })
  updatedCount: number;
}
