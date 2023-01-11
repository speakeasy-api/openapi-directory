import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetImportationProductsReportRequestErrorCode } from "./getimportationproductsreportrequesterrorcode";



// GetImportationProductsReportRequest
/** 
 * Get Importation Products Report Request
**/
export class GetImportationProductsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ean" })
  ean?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCodes", elemType: GetImportationProductsReportRequestErrorCode })
  errorCodes?: GetImportationProductsReportRequestErrorCode[];

  @SpeakeasyMetadata({ data: "json, name=mpn" })
  mpn?: string;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
