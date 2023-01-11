package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNewTag400ApplicationJson {
    @JsonProperty("error")
    public String error;
    public CreateNewTag400ApplicationJson withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public String[] messages;
    public CreateNewTag400ApplicationJson withMessages(String[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonProperty("root_causes")
    public String[] rootCauses;
    public CreateNewTag400ApplicationJson withRootCauses(String[] rootCauses) {
        this.rootCauses = rootCauses;
        return this;
    }
}