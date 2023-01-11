package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAwsDefaultServiceQuotaRequest {
    @JsonProperty("QuotaCode")
    public String quotaCode;
    public GetAwsDefaultServiceQuotaRequest withQuotaCode(String quotaCode) {
        this.quotaCode = quotaCode;
        return this;
    }
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public GetAwsDefaultServiceQuotaRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}