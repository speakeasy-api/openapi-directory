import { SpeakeasyBase } from "../../../internal/utils";
import { GetImportationProductsReportRequestErrorCode } from "./getimportationproductsreportrequesterrorcode";
/**
 * Get Importation Products Report Request
 */
export declare class GetImportationProductsReportRequest extends SpeakeasyBase {
    /**
     * Filter by EAN (equals)
     */
    ean?: string;
    /**
     * Get Importation Products Report Request Error Codes
     */
    errorCodes?: GetImportationProductsReportRequestErrorCode[];
    /**
     * Filter by MPN (equals)
     */
    mpn?: string;
    /**
     * Indicates the page number
     */
    pageNumber: number;
    /**
     * Indicate the item count per page
     */
    pageSize: number;
    /**
     * Filter by Sku (equals)
     */
    sku?: string;
    /**
     * Filter by Title (StartsWith)
     */
    title?: string;
}
