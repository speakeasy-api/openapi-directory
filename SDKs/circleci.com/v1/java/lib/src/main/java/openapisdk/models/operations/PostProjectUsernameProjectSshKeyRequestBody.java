package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostProjectUsernameProjectSshKeyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public PostProjectUsernameProjectSshKeyRequestBody withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_key")
    public String privateKey;
    public PostProjectUsernameProjectSshKeyRequestBody withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
}