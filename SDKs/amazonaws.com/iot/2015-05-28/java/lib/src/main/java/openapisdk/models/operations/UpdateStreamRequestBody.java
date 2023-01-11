package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStreamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateStreamRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public openapisdk.models.shared.StreamFile[] files;
    public UpdateStreamRequestBody withFiles(openapisdk.models.shared.StreamFile[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateStreamRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}