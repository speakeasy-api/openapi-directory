package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRobotApplicationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRobotApplicationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotApplicationSummaries")
    public RobotApplicationSummary[] robotApplicationSummaries;
    public ListRobotApplicationsResponse withRobotApplicationSummaries(RobotApplicationSummary[] robotApplicationSummaries) {
        this.robotApplicationSummaries = robotApplicationSummaries;
        return this;
    }
}