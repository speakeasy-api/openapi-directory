package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceQuotaIncreaseRequestsInTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public ListServiceQuotaIncreaseRequestsInTemplateRequest withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListServiceQuotaIncreaseRequestsInTemplateRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListServiceQuotaIncreaseRequestsInTemplateRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public ListServiceQuotaIncreaseRequestsInTemplateRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}