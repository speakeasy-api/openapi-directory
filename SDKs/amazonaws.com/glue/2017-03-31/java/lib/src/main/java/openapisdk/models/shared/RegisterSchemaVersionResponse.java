package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterSchemaVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionId")
    public String schemaVersionId;
    public RegisterSchemaVersionResponse withSchemaVersionId(String schemaVersionId) {
        this.schemaVersionId = schemaVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public SchemaVersionStatusEnum status;
    public RegisterSchemaVersionResponse withStatus(SchemaVersionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionNumber")
    public Long versionNumber;
    public RegisterSchemaVersionResponse withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}