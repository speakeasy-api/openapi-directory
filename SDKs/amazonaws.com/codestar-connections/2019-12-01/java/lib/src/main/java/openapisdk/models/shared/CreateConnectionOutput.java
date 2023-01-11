package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectionOutput {
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public CreateConnectionOutput withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateConnectionOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}