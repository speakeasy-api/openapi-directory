package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSchema200ApplicationJsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiVersion")
    public String apiVersion;
    public UpdateSchema200ApplicationJsonSchema withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public UpdateSchema200ApplicationJsonSchema withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public UpdateSchema200ApplicationJsonSchema withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateSchema200ApplicationJsonSchema withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public UpdateSchema200ApplicationJsonSchema withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateSchema200ApplicationJsonSchema withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateBy")
    public String updateBy;
    public UpdateSchema200ApplicationJsonSchema withUpdateBy(String updateBy) {
        this.updateBy = updateBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public UpdateSchema200ApplicationJsonSchema withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}