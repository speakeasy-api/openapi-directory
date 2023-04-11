import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { ProductError } from "./producterror";
/**
 * Get Importation Products Report Response
 */
export declare class GetImportationProductsReportResponse extends SpeakeasyBase {
    paginationResult: BeezUPCommonPaginationResult;
    /**
     * Product Errors
     */
    productErrors?: ProductError[];
}
