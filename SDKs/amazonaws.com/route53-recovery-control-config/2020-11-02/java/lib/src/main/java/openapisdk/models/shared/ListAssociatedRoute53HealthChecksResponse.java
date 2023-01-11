package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociatedRoute53HealthChecksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckIds")
    public String[] healthCheckIds;
    public ListAssociatedRoute53HealthChecksResponse withHealthCheckIds(String[] healthCheckIds) {
        this.healthCheckIds = healthCheckIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAssociatedRoute53HealthChecksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}