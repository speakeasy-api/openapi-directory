package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Compatibility")
    public CompatibilityEnum compatibility;
    public GetSchemaResponse withCompatibility(CompatibilityEnum compatibility) {
        this.compatibility = compatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedTime")
    public String createdTime;
    public GetSchemaResponse withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFormat")
    public DataFormatEnum dataFormat;
    public GetSchemaResponse withDataFormat(DataFormatEnum dataFormat) {
        this.dataFormat = dataFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public GetSchemaResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestSchemaVersion")
    public Long latestSchemaVersion;
    public GetSchemaResponse withLatestSchemaVersion(Long latestSchemaVersion) {
        this.latestSchemaVersion = latestSchemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextSchemaVersion")
    public Long nextSchemaVersion;
    public GetSchemaResponse withNextSchemaVersion(Long nextSchemaVersion) {
        this.nextSchemaVersion = nextSchemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryArn")
    public String registryArn;
    public GetSchemaResponse withRegistryArn(String registryArn) {
        this.registryArn = registryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistryName")
    public String registryName;
    public GetSchemaResponse withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public GetSchemaResponse withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaCheckpoint")
    public Long schemaCheckpoint;
    public GetSchemaResponse withSchemaCheckpoint(Long schemaCheckpoint) {
        this.schemaCheckpoint = schemaCheckpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaName")
    public String schemaName;
    public GetSchemaResponse withSchemaName(String schemaName) {
        this.schemaName = schemaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaStatus")
    public SchemaStatusEnum schemaStatus;
    public GetSchemaResponse withSchemaStatus(SchemaStatusEnum schemaStatus) {
        this.schemaStatus = schemaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedTime")
    public String updatedTime;
    public GetSchemaResponse withUpdatedTime(String updatedTime) {
        this.updatedTime = updatedTime;
        return this;
    }
}