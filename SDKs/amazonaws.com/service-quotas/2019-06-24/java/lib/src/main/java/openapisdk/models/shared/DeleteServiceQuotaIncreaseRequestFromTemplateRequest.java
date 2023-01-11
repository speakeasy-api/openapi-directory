package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public DeleteServiceQuotaIncreaseRequestFromTemplateRequest withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonProperty("QuotaCode")
    public String quotaCode;
    public DeleteServiceQuotaIncreaseRequestFromTemplateRequest withQuotaCode(String quotaCode) {
        this.quotaCode = quotaCode;
        return this;
    }
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public DeleteServiceQuotaIncreaseRequestFromTemplateRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}