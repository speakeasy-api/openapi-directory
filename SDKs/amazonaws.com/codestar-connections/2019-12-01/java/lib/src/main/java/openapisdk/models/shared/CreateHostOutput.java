package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHostOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostArn")
    public String hostArn;
    public CreateHostOutput withHostArn(String hostArn) {
        this.hostArn = hostArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateHostOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}