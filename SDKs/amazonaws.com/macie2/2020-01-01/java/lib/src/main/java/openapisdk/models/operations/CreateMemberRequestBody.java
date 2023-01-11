package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMemberRequestBody {
    @JsonProperty("account")
    public CreateMemberRequestBodyAccount account;
    public CreateMemberRequestBody withAccount(CreateMemberRequestBodyAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateMemberRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}