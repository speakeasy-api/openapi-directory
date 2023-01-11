package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SchemaExtensionInfo
 * Information about a schema extension.
**/
public class SchemaExtensionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public SchemaExtensionInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public SchemaExtensionInfo withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndDateTime")
    public OffsetDateTime endDateTime;
    public SchemaExtensionInfo withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaExtensionId")
    public String schemaExtensionId;
    public SchemaExtensionInfo withSchemaExtensionId(String schemaExtensionId) {
        this.schemaExtensionId = schemaExtensionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaExtensionStatus")
    public SchemaExtensionStatusEnum schemaExtensionStatus;
    public SchemaExtensionInfo withSchemaExtensionStatus(SchemaExtensionStatusEnum schemaExtensionStatus) {
        this.schemaExtensionStatus = schemaExtensionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaExtensionStatusReason")
    public String schemaExtensionStatusReason;
    public SchemaExtensionInfo withSchemaExtensionStatusReason(String schemaExtensionStatusReason) {
        this.schemaExtensionStatusReason = schemaExtensionStatusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartDateTime")
    public OffsetDateTime startDateTime;
    public SchemaExtensionInfo withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
}