package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRequestedServiceQuotaChangeHistoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRequestedServiceQuotaChangeHistoryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestedQuotas")
    public RequestedServiceQuotaChange[] requestedQuotas;
    public ListRequestedServiceQuotaChangeHistoryResponse withRequestedQuotas(RequestedServiceQuotaChange[] requestedQuotas) {
        this.requestedQuotas = requestedQuotas;
        return this;
    }
}