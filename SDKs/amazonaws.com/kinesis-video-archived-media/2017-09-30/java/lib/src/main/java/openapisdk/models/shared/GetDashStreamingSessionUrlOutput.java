package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDashStreamingSessionUrlOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DASHStreamingSessionURL")
    public String dashStreamingSessionURL;
    public GetDashStreamingSessionUrlOutput withDashStreamingSessionUrl(String dashStreamingSessionURL) {
        this.dashStreamingSessionURL = dashStreamingSessionURL;
        return this;
    }
}