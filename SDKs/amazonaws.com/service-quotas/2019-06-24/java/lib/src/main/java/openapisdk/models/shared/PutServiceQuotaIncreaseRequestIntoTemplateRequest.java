package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutServiceQuotaIncreaseRequestIntoTemplateRequest {
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public PutServiceQuotaIncreaseRequestIntoTemplateRequest withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonProperty("DesiredValue")
    public Double desiredValue;
    public PutServiceQuotaIncreaseRequestIntoTemplateRequest withDesiredValue(Double desiredValue) {
        this.desiredValue = desiredValue;
        return this;
    }
    @JsonProperty("QuotaCode")
    public String quotaCode;
    public PutServiceQuotaIncreaseRequestIntoTemplateRequest withQuotaCode(String quotaCode) {
        this.quotaCode = quotaCode;
        return this;
    }
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public PutServiceQuotaIncreaseRequestIntoTemplateRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}