package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainerLogResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logEvents")
    public ContainerServiceLogEvent[] logEvents;
    public GetContainerLogResult withLogEvents(ContainerServiceLogEvent[] logEvents) {
        this.logEvents = logEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetContainerLogResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}