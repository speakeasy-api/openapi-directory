package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceQuotaRequest {
    @JsonProperty("QuotaCode")
    public String quotaCode;
    public GetServiceQuotaRequest withQuotaCode(String quotaCode) {
        this.quotaCode = quotaCode;
        return this;
    }
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public GetServiceQuotaRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}