package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelSchemaExtensionRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public CancelSchemaExtensionRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("SchemaExtensionId")
    public String schemaExtensionId;
    public CancelSchemaExtensionRequest withSchemaExtensionId(String schemaExtensionId) {
        this.schemaExtensionId = schemaExtensionId;
        return this;
    }
}