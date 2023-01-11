package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDiscoverySummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentSummary")
    public CustomerAgentInfo agentSummary;
    public GetDiscoverySummaryResponse withAgentSummary(CustomerAgentInfo agentSummary) {
        this.agentSummary = agentSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public Long applications;
    public GetDiscoverySummaryResponse withApplications(Long applications) {
        this.applications = applications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorSummary")
    public CustomerConnectorInfo connectorSummary;
    public GetDiscoverySummaryResponse withConnectorSummary(CustomerConnectorInfo connectorSummary) {
        this.connectorSummary = connectorSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servers")
    public Long servers;
    public GetDiscoverySummaryResponse withServers(Long servers) {
        this.servers = servers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serversMappedToApplications")
    public Long serversMappedToApplications;
    public GetDiscoverySummaryResponse withServersMappedToApplications(Long serversMappedToApplications) {
        this.serversMappedToApplications = serversMappedToApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serversMappedtoTags")
    public Long serversMappedtoTags;
    public GetDiscoverySummaryResponse withServersMappedtoTags(Long serversMappedtoTags) {
        this.serversMappedtoTags = serversMappedtoTags;
        return this;
    }
}