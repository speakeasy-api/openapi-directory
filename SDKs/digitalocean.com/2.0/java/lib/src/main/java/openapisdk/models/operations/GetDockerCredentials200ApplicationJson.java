package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDockerCredentials200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auths")
    public GetDockerCredentials200ApplicationJsonAuths auths;
    public GetDockerCredentials200ApplicationJson withAuths(GetDockerCredentials200ApplicationJsonAuths auths) {
        this.auths = auths;
        return this;
    }
}