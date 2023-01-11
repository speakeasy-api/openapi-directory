package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSchemaVersionMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersion")
    public Boolean latestVersion;
    public PutSchemaVersionMetadataResponse withLatestVersion(Boolean latestVersion) {
        this.latestVersion = latestVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetadataKey")
    public String metadataKey;
    public PutSchemaVersionMetadataResponse withMetadataKey(String metadataKey) {
        this.metadataKey = metadataKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetadataValue")
    public String metadataValue;
    public PutSchemaVersionMetadataResponse withMetadataValue(String metadataValue) {
        this.metadataValue = metadataValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryName")
    public String registryName;
    public PutSchemaVersionMetadataResponse withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public PutSchemaVersionMetadataResponse withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaName")
    public String schemaName;
    public PutSchemaVersionMetadataResponse withSchemaName(String schemaName) {
        this.schemaName = schemaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionId")
    public String schemaVersionId;
    public PutSchemaVersionMetadataResponse withSchemaVersionId(String schemaVersionId) {
        this.schemaVersionId = schemaVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionNumber")
    public Long versionNumber;
    public PutSchemaVersionMetadataResponse withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}