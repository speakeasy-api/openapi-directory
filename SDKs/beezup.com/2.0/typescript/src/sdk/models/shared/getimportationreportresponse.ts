import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetImportationReportResponseDiff } from "./getimportationreportresponsediff";
import { GetImportationReportResponseError } from "./getimportationreportresponseerror";
import { GetImportationReportResponseImportationInfo } from "./getimportationreportresponseimportationinfo";
import { GetImportationReportResponseProductMetrics } from "./getimportationreportresponseproductmetrics";



// GetImportationReportResponse
/** 
 * Get Importation Report Response
**/
export class GetImportationReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: GetImportationReportResponseDiff;

  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: GetImportationReportResponseDiff;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetImportationReportResponseError })
  errors: GetImportationReportResponseError[];

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "json, name=importationInfo" })
  importationInfo: GetImportationReportResponseImportationInfo;

  @SpeakeasyMetadata({ data: "json, name=productMetrics" })
  productMetrics?: GetImportationReportResponseProductMetrics;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: GetImportationReportResponseDiff;
}
