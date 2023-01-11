package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchemaVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedTime")
    public String createdTime;
    public GetSchemaVersionResponse withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFormat")
    public DataFormatEnum dataFormat;
    public GetSchemaVersionResponse withDataFormat(DataFormatEnum dataFormat) {
        this.dataFormat = dataFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public GetSchemaVersionResponse withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaDefinition")
    public String schemaDefinition;
    public GetSchemaVersionResponse withSchemaDefinition(String schemaDefinition) {
        this.schemaDefinition = schemaDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaVersionId")
    public String schemaVersionId;
    public GetSchemaVersionResponse withSchemaVersionId(String schemaVersionId) {
        this.schemaVersionId = schemaVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public SchemaVersionStatusEnum status;
    public GetSchemaVersionResponse withStatus(SchemaVersionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionNumber")
    public Long versionNumber;
    public GetSchemaVersionResponse withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}