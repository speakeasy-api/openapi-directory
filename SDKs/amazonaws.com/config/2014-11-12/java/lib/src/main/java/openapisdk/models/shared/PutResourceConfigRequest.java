package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutResourceConfigRequest {
    @JsonProperty("Configuration")
    public String configuration;
    public PutResourceConfigRequest withConfiguration(String configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public PutResourceConfigRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceName")
    public String resourceName;
    public PutResourceConfigRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonProperty("ResourceType")
    public String resourceType;
    public PutResourceConfigRequest withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("SchemaVersionId")
    public String schemaVersionId;
    public PutResourceConfigRequest withSchemaVersionId(String schemaVersionId) {
        this.schemaVersionId = schemaVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public PutResourceConfigRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}