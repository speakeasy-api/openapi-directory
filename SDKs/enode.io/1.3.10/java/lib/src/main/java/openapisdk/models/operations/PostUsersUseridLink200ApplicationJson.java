package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostUsersUseridLink200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkState")
    public String linkState;
    public PostUsersUseridLink200ApplicationJson withLinkState(String linkState) {
        this.linkState = linkState;
        return this;
    }
}