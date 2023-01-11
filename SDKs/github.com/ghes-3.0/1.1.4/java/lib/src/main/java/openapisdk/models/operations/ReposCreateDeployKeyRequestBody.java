package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateDeployKeyRequestBody {
    @JsonProperty("key")
    public String key;
    public ReposCreateDeployKeyRequestBody withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read_only")
    public Boolean readOnly;
    public ReposCreateDeployKeyRequestBody withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ReposCreateDeployKeyRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}