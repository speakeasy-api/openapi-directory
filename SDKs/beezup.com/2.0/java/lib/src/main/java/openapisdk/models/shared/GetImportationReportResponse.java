package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetImportationReportResponse
 * Get Importation Report Response
**/
public class GetImportationReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public GetImportationReportResponseDiff categories;
    public GetImportationReportResponse withCategories(GetImportationReportResponseDiff categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public GetImportationReportResponseDiff columns;
    public GetImportationReportResponse withColumns(GetImportationReportResponseDiff columns) {
        this.columns = columns;
        return this;
    }
    @JsonProperty("errors")
    public GetImportationReportResponseError[] errors;
    public GetImportationReportResponse withErrors(GetImportationReportResponseError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("executionId")
    public String executionId;
    public GetImportationReportResponse withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonProperty("importationInfo")
    public GetImportationReportResponseImportationInfo importationInfo;
    public GetImportationReportResponse withImportationInfo(GetImportationReportResponseImportationInfo importationInfo) {
        this.importationInfo = importationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productMetrics")
    public GetImportationReportResponseProductMetrics productMetrics;
    public GetImportationReportResponse withProductMetrics(GetImportationReportResponseProductMetrics productMetrics) {
        this.productMetrics = productMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public GetImportationReportResponseDiff products;
    public GetImportationReportResponse withProducts(GetImportationReportResponseDiff products) {
        this.products = products;
        return this;
    }
}