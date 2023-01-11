package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MigrationsMapCommitAuthorRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public MigrationsMapCommitAuthorRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MigrationsMapCommitAuthorRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_id")
    public String remoteId;
    public MigrationsMapCommitAuthorRequestBody withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
}