package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetHostInput {
    @JsonProperty("HostArn")
    public String hostArn;
    public GetHostInput withHostArn(String hostArn) {
        this.hostArn = hostArn;
        return this;
    }
}