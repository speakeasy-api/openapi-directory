package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetImportationProductsReportRequestErrorCode
 * Get Importation Products Report Request Error Codes
**/
public class GetImportationProductsReportRequestErrorCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public GetImportationProductsReportRequestErrorCode withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userColumnName")
    public String userColumnName;
    public GetImportationProductsReportRequestErrorCode withUserColumnName(String userColumnName) {
        this.userColumnName = userColumnName;
        return this;
    }
}