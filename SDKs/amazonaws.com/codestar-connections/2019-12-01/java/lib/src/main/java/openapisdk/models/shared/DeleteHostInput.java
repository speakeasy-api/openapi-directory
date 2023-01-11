package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteHostInput {
    @JsonProperty("HostArn")
    public String hostArn;
    public DeleteHostInput withHostArn(String hostArn) {
        this.hostArn = hostArn;
        return this;
    }
}