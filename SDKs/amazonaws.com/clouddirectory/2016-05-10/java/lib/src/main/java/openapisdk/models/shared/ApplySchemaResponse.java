package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplySchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppliedSchemaArn")
    public String appliedSchemaArn;
    public ApplySchemaResponse withAppliedSchemaArn(String appliedSchemaArn) {
        this.appliedSchemaArn = appliedSchemaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public ApplySchemaResponse withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
}