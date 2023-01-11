package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetImportationProductsReportRequest
 * Get Importation Products Report Request
**/
public class GetImportationProductsReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String ean;
    public GetImportationProductsReportRequest withEan(String ean) {
        this.ean = ean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCodes")
    public GetImportationProductsReportRequestErrorCode[] errorCodes;
    public GetImportationProductsReportRequest withErrorCodes(GetImportationProductsReportRequestErrorCode[] errorCodes) {
        this.errorCodes = errorCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String mpn;
    public GetImportationProductsReportRequest withMpn(String mpn) {
        this.mpn = mpn;
        return this;
    }
    @JsonProperty("pageNumber")
    public Integer pageNumber;
    public GetImportationProductsReportRequest withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GetImportationProductsReportRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public GetImportationProductsReportRequest withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetImportationProductsReportRequest withTitle(String title) {
        this.title = title;
        return this;
    }
}