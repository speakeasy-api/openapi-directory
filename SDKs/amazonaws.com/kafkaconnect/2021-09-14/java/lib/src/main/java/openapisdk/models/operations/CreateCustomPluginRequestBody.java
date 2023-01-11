package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomPluginRequestBody {
    @JsonProperty("contentType")
    public CreateCustomPluginRequestBodyContentTypeEnum contentType;
    public CreateCustomPluginRequestBody withContentType(CreateCustomPluginRequestBodyContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateCustomPluginRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("location")
    public CreateCustomPluginRequestBodyLocation location;
    public CreateCustomPluginRequestBody withLocation(CreateCustomPluginRequestBodyLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateCustomPluginRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}