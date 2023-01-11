import { SpeakeasyBase } from "../../../internal/utils";
import { GetImportationProductsReportRequestErrorCode } from "./getimportationproductsreportrequesterrorcode";
/**
 * Get Importation Products Report Request
**/
export declare class GetImportationProductsReportRequest extends SpeakeasyBase {
    ean?: string;
    errorCodes?: GetImportationProductsReportRequestErrorCode[];
    mpn?: string;
    pageNumber: number;
    pageSize: number;
    sku?: string;
    title?: string;
}
