package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateStreamRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("files")
    public openapisdk.models.shared.StreamFile[] files;
    public CreateStreamRequestBody withFiles(openapisdk.models.shared.StreamFile[] files) {
        this.files = files;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateStreamRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateStreamRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}