package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAwsDefaultServiceQuotasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAwsDefaultServiceQuotasResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quotas")
    public ServiceQuota[] quotas;
    public ListAwsDefaultServiceQuotasResponse withQuotas(ServiceQuota[] quotas) {
        this.quotas = quotas;
        return this;
    }
}