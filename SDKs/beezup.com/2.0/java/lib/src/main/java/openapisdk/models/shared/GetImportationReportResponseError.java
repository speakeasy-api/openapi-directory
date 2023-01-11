package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImportationReportResponseError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPColumnName")
    public String beezUPColumnName;
    public GetImportationReportResponseError withBeezUpColumnName(String beezUPColumnName) {
        this.beezUPColumnName = beezUPColumnName;
        return this;
    }
    @JsonProperty("errorCode")
    public String errorCode;
    public GetImportationReportResponseError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("productCount")
    public Long productCount;
    public GetImportationReportResponseError withProductCount(Long productCount) {
        this.productCount = productCount;
        return this;
    }
    @JsonProperty("userColumName")
    public String userColumName;
    public GetImportationReportResponseError withUserColumName(String userColumName) {
        this.userColumName = userColumName;
        return this;
    }
}