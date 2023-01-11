package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEnvironmentAccountConnectionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentName")
    public String environmentName;
    public ListEnvironmentAccountConnectionsInput withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListEnvironmentAccountConnectionsInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEnvironmentAccountConnectionsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("requestedBy")
    public EnvironmentAccountConnectionRequesterAccountTypeEnum requestedBy;
    public ListEnvironmentAccountConnectionsInput withRequestedBy(EnvironmentAccountConnectionRequesterAccountTypeEnum requestedBy) {
        this.requestedBy = requestedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses")
    public EnvironmentAccountConnectionStatusEnum[] statuses;
    public ListEnvironmentAccountConnectionsInput withStatuses(EnvironmentAccountConnectionStatusEnum[] statuses) {
        this.statuses = statuses;
        return this;
    }
}