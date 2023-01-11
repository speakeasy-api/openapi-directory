package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChangeLogsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeLogs")
    public ChangeLog[] changeLogs;
    public GetChangeLogsResponse withChangeLogs(ChangeLog[] changeLogs) {
        this.changeLogs = changeLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetChangeLogsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}