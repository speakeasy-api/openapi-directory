package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLoginSample {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PostLoginSample withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public PostLoginSample withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public PostLoginSampleSourceEnum source;
    public PostLoginSample withSource(PostLoginSampleSourceEnum source) {
        this.source = source;
        return this;
    }
}