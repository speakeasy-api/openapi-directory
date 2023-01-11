package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartSchemaExtensionRequest {
    @JsonProperty("CreateSnapshotBeforeSchemaExtension")
    public Boolean createSnapshotBeforeSchemaExtension;
    public StartSchemaExtensionRequest withCreateSnapshotBeforeSchemaExtension(Boolean createSnapshotBeforeSchemaExtension) {
        this.createSnapshotBeforeSchemaExtension = createSnapshotBeforeSchemaExtension;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public StartSchemaExtensionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public StartSchemaExtensionRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("LdifContent")
    public String ldifContent;
    public StartSchemaExtensionRequest withLdifContent(String ldifContent) {
        this.ldifContent = ldifContent;
        return this;
    }
}