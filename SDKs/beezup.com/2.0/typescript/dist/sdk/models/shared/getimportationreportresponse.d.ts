import { SpeakeasyBase } from "../../../internal/utils";
import { GetImportationReportResponseDiff } from "./getimportationreportresponsediff";
import { GetImportationReportResponseError } from "./getimportationreportresponseerror";
import { GetImportationReportResponseImportationInfo } from "./getimportationreportresponseimportationinfo";
import { GetImportationReportResponseProductMetrics } from "./getimportationreportresponseproductmetrics";
/**
 * Get Importation Report Response
 */
export declare class GetImportationReportResponse extends SpeakeasyBase {
    categories?: GetImportationReportResponseDiff;
    columns?: GetImportationReportResponseDiff;
    errors: GetImportationReportResponseError[];
    /**
     * The execution identifier of the catalog importation
     */
    executionId: string;
    importationInfo: GetImportationReportResponseImportationInfo;
    productMetrics?: GetImportationReportResponseProductMetrics;
    products?: GetImportationReportResponseDiff;
}
