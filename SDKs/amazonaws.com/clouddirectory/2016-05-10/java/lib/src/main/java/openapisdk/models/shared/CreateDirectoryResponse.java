package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateDirectoryResponse {
    @JsonProperty("AppliedSchemaArn")
    public String appliedSchemaArn;
    public CreateDirectoryResponse withAppliedSchemaArn(String appliedSchemaArn) {
        this.appliedSchemaArn = appliedSchemaArn;
        return this;
    }
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public CreateDirectoryResponse withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateDirectoryResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public CreateDirectoryResponse withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
}