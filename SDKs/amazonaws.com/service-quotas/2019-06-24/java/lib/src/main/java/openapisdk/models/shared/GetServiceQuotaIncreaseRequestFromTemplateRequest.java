package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceQuotaIncreaseRequestFromTemplateRequest {
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public GetServiceQuotaIncreaseRequestFromTemplateRequest withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonProperty("QuotaCode")
    public String quotaCode;
    public GetServiceQuotaIncreaseRequestFromTemplateRequest withQuotaCode(String quotaCode) {
        this.quotaCode = quotaCode;
        return this;
    }
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public GetServiceQuotaIncreaseRequestFromTemplateRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}