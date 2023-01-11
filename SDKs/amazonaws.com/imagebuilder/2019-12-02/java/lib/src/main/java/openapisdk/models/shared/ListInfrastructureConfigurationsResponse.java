package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInfrastructureConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infrastructureConfigurationSummaryList")
    public InfrastructureConfigurationSummary[] infrastructureConfigurationSummaryList;
    public ListInfrastructureConfigurationsResponse withInfrastructureConfigurationSummaryList(InfrastructureConfigurationSummary[] infrastructureConfigurationSummaryList) {
        this.infrastructureConfigurationSummaryList = infrastructureConfigurationSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListInfrastructureConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListInfrastructureConfigurationsResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}