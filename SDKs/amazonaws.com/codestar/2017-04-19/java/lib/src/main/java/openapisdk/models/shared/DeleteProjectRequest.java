package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteProjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public DeleteProjectRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteStack")
    public Boolean deleteStack;
    public DeleteProjectRequest withDeleteStack(Boolean deleteStack) {
        this.deleteStack = deleteStack;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public DeleteProjectRequest withId(String id) {
        this.id = id;
        return this;
    }
}