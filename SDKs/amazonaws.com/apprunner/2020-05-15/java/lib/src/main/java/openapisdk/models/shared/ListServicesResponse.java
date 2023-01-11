package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListServicesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ServiceSummaryList")
    public ServiceSummary[] serviceSummaryList;
    public ListServicesResponse withServiceSummaryList(ServiceSummary[] serviceSummaryList) {
        this.serviceSummaryList = serviceSummaryList;
        return this;
    }
}