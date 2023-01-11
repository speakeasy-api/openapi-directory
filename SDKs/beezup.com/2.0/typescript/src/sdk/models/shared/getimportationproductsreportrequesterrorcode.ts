import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetImportationProductsReportRequestErrorCode
/** 
 * Get Importation Products Report Request Error Codes
**/
export class GetImportationProductsReportRequestErrorCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=userColumnName" })
  userColumnName?: string;
}
